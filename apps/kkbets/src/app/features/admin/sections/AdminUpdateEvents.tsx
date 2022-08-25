import { ITeamFrontend } from '@kkbets/api-interfaces';
import { useEffect, useState } from 'react';
import withAlert, { WithAlertProps } from '../../../Hoc/withAlert';
import Button from '../../../components/Button/Button';
import axiosConfig from '../../../utilities/axiosConfig';
import { AdminRow } from '../AdminStyles.css';
import BackdropLoaderWrapper from '../../../wrappers/BackdropLoaderWrapper';
import AdminInput from '../components/AdminInput/AdminInput';
import Loader from '../../../components/Loader/Loader';

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
  const [eventsLoading, setEventsLoading] = useState(true);

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
    setEventsLoading(true);
    const res = await axiosConfig.get('/events?ended=false&started=true');
    setEvents(res.data);
    setEventsLoading(false);
  };

  const updateScoreHandler = (id: string, value: number, target: 'homeScore' | 'awayScore') => {
    const eventIndex = events?.findIndex((event) => event._id === id);
    const newEvents = [...events];
    newEvents[eventIndex][target] = value;
    setEvents(newEvents);
  };

  if (eventsLoading) {
    return <Loader />;
  } else if (!eventsLoading && events.length === 0) {
    return (
      <div style={{ minHeight: '60px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        No events to update
      </div>
    );
  }

  return (
    <BackdropLoaderWrapper isLoading={loading}>
      <>
        {events.map((event) => (
          <AdminRow key={event._id}>
            <div className="event-details">
              <img src={event.teamHome.image} alt="" width={20} />
              <div className="name">
                {event.teamHome.shortName} vs {event.teamAway.shortName}
              </div>
              <img src={event.teamAway.image} alt="" width={20} />
            </div>

            <AdminInput
              label="Home score"
              type="number"
              update={(e) => updateScoreHandler(event._id, +e.target.value, 'homeScore')}
              min={1}
              step={0.1}
              fullWidth={false}
            />
            <AdminInput
              label="Away score"
              type="number"
              update={(e) => updateScoreHandler(event._id, +e.target.value, 'awayScore')}
              min={1}
              fullWidth={false}
              step={0.1}
            />

            <Button click={() => updateEventHandler(event._id)} fill style={{ padding: '12px' }}>
              Update
            </Button>
          </AdminRow>
        ))}
      </>
    </BackdropLoaderWrapper>
  );
}

export default withAlert(AdminUpdateEvents);
