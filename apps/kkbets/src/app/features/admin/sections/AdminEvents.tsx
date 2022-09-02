import { useEffect, useState } from 'react';

import { FormControlLabel, Switch } from '@mui/material';
import { ITeamFrontend } from '@kkbets/api-interfaces';
import withAlert, { WithAlertProps } from '../../../Hoc/withAlert';
import axiosConfig from '../../../utilities/axiosConfig';
import { AdminRow } from '../AdminStyles.css';
import AdminInput from '../components/AdminInput/AdminInput';
import AdminInputPicker from '../components/AdminInputPicker/AdminInputPicker';
import AdminConfirmButton from '../components/AdminConfirmButton';
import BackdropLoaderWrapper from '../../../wrappers/BackdropLoaderWrapper';

function AdminEvents(props: WithAlertProps): JSX.Element {
  const [teamsList, setTeamsList] = useState<ITeamFrontend[]>([]);
  const [categoriesList, setCategoriesList] = useState<{ _id: string; name: string }[]>([]);
  const [loading, setLoading] = useState(false);

  const [teamHome, setTeamHome] = useState('');
  const [teamAway, setTeamAway] = useState('');

  const [courseHomeWin, setCourseHomeWin] = useState('');
  const [courseDraw, setCourseDraw] = useState('');
  const [courseAwayWin, setCourseAwayWin] = useState('');

  const [day, setDay] = useState(new Date().toISOString().split('T')[0]);

  const getCurrentTime = () =>
    new Date().toISOString().split('T')[1].split(':')[0] + ':' + new Date().toISOString().split('T')[1].split(':')[1];

  const [time, setTime] = useState(getCurrentTime());

  const [category, setCategory] = useState('');
  const [highlight, setHighlight] = useState(true);

  useEffect(() => {
    loadTeams();
    loadCategories();
  }, []);

  const loadTeams = async () => {
    const res = await axiosConfig.get('/teams');
    setTeamsList(res.data);
  };

  const loadCategories = async () => {
    const res = await axiosConfig.get('/categories');
    setCategoriesList(res.data);
  };

  const addEventHandler = async () => {
    try {
      setLoading(true);
      await axiosConfig.post('/events', {
        teamHome,
        teamAway,
        courseHomeWin,
        courseDraw,
        courseAwayWin,
        date: new Date(day + ' ' + time),
        category,
        important: highlight
      });
      props.setIsSuccessOpened(true);
    } catch (err) {
      props.setError(err.response.data);
      props.setIsErrorOpened(true);
    }
    setLoading(false);
  };

  return (
    <BackdropLoaderWrapper isLoading={loading}>
      <>
        <AdminRow>
          <AdminInputPicker options={teamsList} update={setTeamHome} label="Team home" />
          <div>VS</div>
          <AdminInputPicker options={teamsList} update={setTeamAway} label="Team away" />
        </AdminRow>
        <AdminRow>
          <AdminInput
            label="Home win course"
            type="number"
            update={(e) => setCourseHomeWin(e.target.value)}
            min={1}
            step={0.1}
          />
          <AdminInput
            label="Draw course"
            type="number"
            update={(e) => setCourseDraw(e.target.value)}
            min={1}
            step={0.1}
          />
          <AdminInput
            label="Away win course"
            type="number"
            update={(e) => setCourseAwayWin(e.target.value)}
            min={1}
            step={0.1}
          />
        </AdminRow>
        <AdminRow>
          <AdminInput label="Event day" type="date" update={(e) => setDay(e.target.value)} value={day} />
          <AdminInput label="Time" type="time" update={(e) => setTime(e.target.value)} value={time} />
          <AdminInputPicker options={categoriesList} update={setCategory} label="Category" />

          <FormControlLabel
            control={<Switch checked={highlight} onChange={(e) => setHighlight(e.target.checked)} color="primary" />}
            label="Highlight"
          />
        </AdminRow>

        <AdminConfirmButton content="Add Event" onConfirm={addEventHandler} />
      </>
    </BackdropLoaderWrapper>
  );
}

export default withAlert(AdminEvents);
