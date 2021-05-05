import { Snackbar, TextField } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import axios from 'axios';
import { MatchType } from 'models/Match.model';
import React, { useEffect, useState } from 'react';
import Button from 'shared/Button/Button';
import Loader from 'shared/Spinner/Loader';
import { BACKEND_URL } from 'utilities/connection';

function AdminUpdateEvents(): JSX.Element {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const [isSuccessOpened, setIsSuccessOpened] = useState(false);
    const [isErrorOpened, setIsErrorOpened] = useState(false);

    const [events, setEvents] = useState<any[]>([]);

    useEffect(() => {
        loadEvents();
    }, []);

    const updateEventHandler = async (id: string) => {
        try {
            const eventData = events?.find((event) => event._id === id);
            setLoading(true);
            await axios.patch(
                BACKEND_URL + '/events/' + id,
                {
                    teamHomeScore: eventData.home,
                    teamAwayScore: eventData.away
                },
                { withCredentials: true }
            );
            setIsSuccessOpened(true);
        } catch (err) {
            setError(err.response.data);
            setIsErrorOpened(true);
        } finally {
            setLoading(false);
        }
    };

    const loadEvents = async () => {
        const res = await axios.get(BACKEND_URL + '/events');
        setEvents(res.data);
    };

    const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        setIsSuccessOpened(false);
        setIsErrorOpened(false);
    };

    const updateScoreHandler = (id: string, value: number, target: 'home' | 'away') => {
        const eventIndex = events?.findIndex((event) => event._id === id);
        const newEvents = [...events];
        newEvents[eventIndex][target] = value;
        setEvents(newEvents);
    };

    return (
        <>
            {loading || !events ? (
                <Loader />
            ) : (
                <>
                    {events.map((event: MatchType) => (
                        <div
                            key={event._id}
                            style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                padding: '10px',
                                alignItems: 'center'
                            }}
                        >
                            <p>
                                {event.teamHome.shortName} vs {event.teamAway.shortName}
                            </p>

                            <TextField
                                id="standard-number"
                                label="Home score"
                                type="number"
                                variant="outlined"
                                onChange={(e) => updateScoreHandler(event._id, +e.target.value, 'home')}
                                style={{ background: '#28282E', borderRadius: '5px', color: 'white' }}
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
                                id="standard-number"
                                label="Away score"
                                type="number"
                                variant="outlined"
                                onChange={(e) => updateScoreHandler(event._id, +e.target.value, 'away')}
                                style={{ background: '#28282E', borderRadius: '5px', color: 'white' }}
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
                        </div>
                    ))}
                </>
            )}
            <Snackbar open={isSuccessOpened} autoHideDuration={5000} onClose={handleClose}>
                <Alert variant="filled" onClose={handleClose} severity="success">
                    The event has been updated
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

export default AdminUpdateEvents;
