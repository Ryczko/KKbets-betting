import { FormControlLabel, Snackbar, Switch, TextField } from '@material-ui/core';
import { Alert, Autocomplete } from '@material-ui/lab';
import axios from 'axios';
import { TeamType } from 'models/Team.model';
import React, { useEffect, useState } from 'react';
import Button from 'shared/Button/Button';
import { BACKEND_URL } from 'utilities/connection';

function AdminEvents(): JSX.Element {
    const [teamsList, setTeamsList] = useState<TeamType[]>([]);
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
        const res = await axios.get(BACKEND_URL + '/teams');
        setTeamsList(res.data);
    };

    const loadCategories = async () => {
        const res = await axios.get(BACKEND_URL + '/categories');
        setCategoriesList(res.data);
    };

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const [isSuccessOpened, setIsSuccessOpened] = useState(false);
    const [isErrorOpened, setIsErrorOpened] = useState(false);

    const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        setIsSuccessOpened(false);
        setIsErrorOpened(false);
    };

    const addCategoryHandler = async () => {
        try {
            setLoading(true);

            await axios.post(BACKEND_URL + '/events', {
                teamHome,
                teamAway,
                courseHomeWin,
                courseDraw,
                courseAwayWin,
                date: new Date(day + ' ' + time),
                category,
                important: true
            });
            setIsSuccessOpened(true);
        } catch (err) {
            setError(err.response.data);
            setIsErrorOpened(true);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Autocomplete
                        id="combo-box-demo"
                        options={teamsList}
                        getOptionLabel={(option) => option.name}
                        style={{ width: 300, color: 'white' }}
                        onChange={(event, newValue) => {
                            setTeamHome(newValue!._id);
                        }}
                        renderInput={(params) => (
                            <TextField
                                style={{ background: '#28282E', borderRadius: '5px', color: 'white' }}
                                {...params}
                                InputLabelProps={{
                                    style: { color: '#fff' }
                                }}
                                InputProps={{
                                    ...params.InputProps,
                                    style: { color: 'white' }
                                }}
                                label="Team home"
                                variant="outlined"
                            />
                        )}
                    />
                    <div>VS</div>
                    <Autocomplete
                        id="combo-box-demo"
                        options={teamsList}
                        style={{ width: 300, color: 'white' }}
                        getOptionLabel={(option) => option.name}
                        onChange={(event, newValue) => {
                            setTeamAway(newValue!._id);
                        }}
                        renderInput={(params) => (
                            <TextField
                                style={{ background: '#28282E', borderRadius: '5px', color: 'white' }}
                                {...params}
                                InputLabelProps={{
                                    style: { color: '#fff' }
                                }}
                                InputProps={{
                                    ...params.InputProps,
                                    style: { color: 'white' }
                                }}
                                label="Team away"
                                variant="outlined"
                            />
                        )}
                    />
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', margin: '20px 0' }}>
                    <TextField
                        id="standard-number"
                        label="Home win course"
                        type="number"
                        variant="outlined"
                        onChange={(e) => setCourseHomeWin(e.target.value)}
                        style={{ background: '#28282E', borderRadius: '5px', color: 'white' }}
                        InputProps={{
                            style: { color: 'white' },
                            inputProps: {
                                min: 1,
                                step: '0.1'
                            }
                        }}
                        InputLabelProps={{
                            style: { color: '#fff' }
                        }}
                    />
                    <TextField
                        id="standard-number"
                        label="Draw win course"
                        type="number"
                        variant="outlined"
                        onChange={(e) => setCourseDraw(e.target.value)}
                        style={{ background: '#28282E', borderRadius: '5px', color: 'white' }}
                        InputProps={{
                            style: { color: 'white' },
                            inputProps: {
                                min: 1,
                                step: '0.1'
                            }
                        }}
                        InputLabelProps={{
                            style: { color: '#fff' }
                        }}
                    />
                    <TextField
                        id="standard-number"
                        label="Away win course"
                        type="number"
                        variant="outlined"
                        onChange={(e) => setCourseAwayWin(e.target.value)}
                        style={{ background: '#28282E', borderRadius: '5px', color: 'white' }}
                        InputProps={{
                            style: { color: 'white' },
                            inputProps: {
                                min: 1,
                                step: '0.1'
                            }
                        }}
                        InputLabelProps={{
                            style: { color: '#fff' }
                        }}
                    />
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', margin: '15px 0' }}>
                    <TextField
                        id="date"
                        label="Event day"
                        type="date"
                        value={day}
                        variant="outlined"
                        onChange={(e) => setDay(e.target.value)}
                        style={{ background: '#28282E', borderRadius: '5px', color: 'white' }}
                        InputProps={{
                            style: { color: 'white' }
                        }}
                        InputLabelProps={{
                            style: { color: '#fff' }
                        }}
                    />
                    <input type="time" value={time} onChange={(e) => setTime(e.target.value)} />
                    <Autocomplete
                        id="combo-box-demo"
                        options={categoriesList}
                        getOptionLabel={(option) => option.name}
                        style={{ width: 300, color: 'white' }}
                        onChange={(event, newValue) => {
                            setCategory(newValue!._id);
                        }}
                        renderInput={(params) => (
                            <TextField
                                style={{ background: '#28282E', borderRadius: '5px', color: 'white' }}
                                {...params}
                                InputLabelProps={{
                                    style: { color: '#fff' }
                                }}
                                InputProps={{
                                    ...params.InputProps,
                                    style: { color: 'white' }
                                }}
                                label="Category"
                                variant="outlined"
                            />
                        )}
                    />
                    <FormControlLabel
                        control={
                            <Switch
                                checked={highlight}
                                onChange={(e) => setHighlight(e.target.checked)}
                                color="primary"
                            />
                        }
                        label="Highlight"
                    />
                </div>

                <Button fill style={{ padding: '10px 14px' }} click={addCategoryHandler}>
                    Add
                </Button>
            </>

            <Snackbar open={isSuccessOpened} autoHideDuration={5000} onClose={handleClose}>
                <Alert variant="filled" onClose={handleClose} severity="success">
                    The event has been added
                </Alert>
            </Snackbar>
            <Snackbar open={isErrorOpened} autoHideDuration={5000} onClose={handleClose}>
                <Alert variant="filled" onClose={handleClose} severity="error">
                    {error}
                </Alert>
            </Snackbar>
        </>
    );
}

export default AdminEvents;
