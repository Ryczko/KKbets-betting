import { FormControlLabel, Switch } from '@material-ui/core';
import { ITeam } from 'types/Team.model';
import { useEffect, useState } from 'react';
import Button from 'shared/Button/Button';
import withAlert, { WithAlertProps } from 'Hoc/withAlert';
import AdminInputPicker from './AdminInputPicker/AdminInputPicker';
import { AdminRow } from './AdminStyles.css';
import AdminInput from './AdminInput/AdminInput';
import axiosConfig from 'utilities/axiosConfig';

function AdminEvents(props: WithAlertProps): JSX.Element {
    const [teamsList, setTeamsList] = useState<ITeam[]>([]);
    const [categoriesList, setCategoriesList] = useState<{ _id: string; name: string }[]>([]);

    const [teamHome, setTeamHome] = useState('');
    const [teamAway, setTeamAway] = useState('');

    const [courseHomeWin, setCourseHomeWin] = useState('');
    const [courseDraw, setCourseDraw] = useState('');
    const [courseAwayWin, setCourseAwayWin] = useState('');

    const [day, setDay] = useState('2021-06-06');
    const [time, setTime] = useState('12:00');

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

    const addCategoryHandler = async () => {
        try {
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
    };

    return (
        <>
            <AdminRow>
                <AdminInputPicker options={teamsList} update={setTeamHome} label="Team home" />
                <div>VS</div>
                <AdminInputPicker options={teamsList} update={setTeamAway} label="Team away" />
            </AdminRow>
            <AdminRow>
                <AdminInput label="Home win course" type="number" update={setCourseHomeWin} min={1} step={0.1} />
                <AdminInput label="Draw course" type="number" update={setCourseDraw} min={1} step={0.1} />
                <AdminInput label="Away win course" type="number" update={setCourseAwayWin} min={1} step={0.1} />
            </AdminRow>
            <AdminRow>
                <AdminInput label="Event day" type="date" update={setDay} value={day} />
                <input type="time" value={time} onChange={(e) => setTime(e.target.value)} />
                <AdminInputPicker options={categoriesList} update={setCategory} label="Category" />

                <FormControlLabel
                    control={
                        <Switch checked={highlight} onChange={(e) => setHighlight(e.target.checked)} color="primary" />
                    }
                    label="Highlight"
                />
            </AdminRow>

            <Button fill style={{ padding: '10px 14px' }} click={addCategoryHandler}>
                Add
            </Button>
        </>
    );
}

export default withAlert(AdminEvents);
