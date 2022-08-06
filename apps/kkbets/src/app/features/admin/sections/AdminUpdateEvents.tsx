import { ITeamFrontend } from '@kkbets/api-interfaces';
import { TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import withAlert, { WithAlertProps } from '../../../Hoc/withAlert';
import Button from '../../../components/Button/Button';
import Loader from '../../../components/Loader/Loader';
import axiosConfig from '../../../utilities/axiosConfig';
import { AdminRow } from '../AdminStyles.css';

interface IEventToUpdate {
  _id: string;
  homeScore: number;
  awayScore: number;
  teamHome: ITeamFrontend;
  teamAway: ITeamFrontend;
}

function AdminUpdateEvents(props: WithAlertProps): JSX.Element {
  const [loading, setLoading] = useState(false);

  const [events, setEvents] = useState<IEventToUpdate[]>([]);

  useEffect(() => {
    loadEvents();
  }, []);

  const updateEventHandler = async (id: string) => {
    try {
      const eventData = events?.find((event) => event._id === id);
      if (!eventData) return;
      setLoading(true);
      await axiosConfig.patch('/events/' + id, {
        teamHomeScore: eventData.homeScore,
        teamAwayScore: eventData.awayScore
      });
      props.setIsSuccessOpened(true);
      await loadEvents();
    } catch (err) {
      props.setError(err.response.data);
      props.setIsErrorOpened(true);
    } finally {
      setLoading(false);
    }
  };

  const loadEvents = async () => {
    const res = await axiosConfig.get('/events?ended=false&started=true');
    setEvents(res.data);
  };

  const updateScoreHandler = (id: string, value: number, target: 'homeScore' | 'awayScore') => {
    const eventIndex = events?.findIndex((event) => event._id === id);
    const newEvents = [...events];
    newEvents[eventIndex][target] = value;
    setEvents(newEvents);
  };

  return loading ? (
    <Loader />
  ) : (
    <>
      {events.map((event) => (
        <AdminRow key={event._id}>
          <p>
            {event.teamHome.shortName} vs {event.teamAway.shortName}
          </p>

          <TextField
            label="Home score"
            type="number"
            variant="outlined"
            onChange={(e) => updateScoreHandler(event._id, +e.target.value, 'homeScore')}
            style={{
              background: '#28282E',
              borderRadius: '5px',
              color: 'white'
            }}
            InputProps={{
              style: { color: 'white' },
              inputProps: {
                min: 0,
                step: '1'
              }
            }}
            InputLabelProps={{
              style: { color: '#fff' }
            }}
          />
          <TextField
            label="Away score"
            type="number"
            variant="outlined"
            onChange={(e) => updateScoreHandler(event._id, +e.target.value, 'awayScore')}
            style={{
              background: '#28282E',
              borderRadius: '5px',
              color: 'white'
            }}
            InputProps={{
              style: { color: 'white' },
              inputProps: {
                min: 0,
                step: '1'
              }
            }}
            InputLabelProps={{
              style: { color: '#fff' }
            }}
          />
          <Button click={() => updateEventHandler(event._id)} fill style={{ padding: '12px' }}>
            Update
          </Button>
        </AdminRow>
      ))}
    </>
  );
}

export default withAlert(AdminUpdateEvents);
