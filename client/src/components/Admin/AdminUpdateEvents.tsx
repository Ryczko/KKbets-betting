import { TextField } from '@material-ui/core';
import { IMatch } from 'types/Match.model';
import React, { useEffect, useState } from 'react';
import Button from 'shared/Button/Button';
import Loader from 'shared/Spinner/Loader';
import withAlert, { WithAlertProps } from 'Hoc/withAlert';
import { AdminRow } from './AdminStyles.css';
import axiosConfig from 'utilities/axiosConfig';

function AdminUpdateEvents(props: WithAlertProps): JSX.Element {
    const [loading, setLoading] = useState(false);

    const [events, setEvents] = useState<any[]>([]);

    useEffect(() => {
        loadEvents();
    }, []);

    const updateEventHandler = async (id: string) => {
        try {
            const eventData = events?.find((event) => event._id === id);
            setLoading(true);
            await axiosConfig.patch('/events/' + id, {
                teamHomeScore: eventData.home,
                teamAwayScore: eventData.away
            });
            props.setIsSuccessOpened?.(true);
            await loadEvents();
        } catch (err) {
            props.setError?.(err.response.data);
            props.setIsErrorOpened?.(true);
        } finally {
            setLoading(false);
        }
    };

    const loadEvents = async () => {
        const res = await axiosConfig.get('/events?ended=false');
        setEvents(res.data);
    };

    const updateScoreHandler = (id: string, value: number, target: 'home' | 'away') => {
        const eventIndex = events?.findIndex((event) => event._id === id);
        const newEvents = [...events];
        newEvents[eventIndex][target] = value;
        setEvents(newEvents);
    };

    return (
        <>
            {loading ? (
                <Loader />
            ) : (
                <>
                    {events.map((event: IMatch) => (
                        <AdminRow key={event._id}>
                            <p>
                                {event.teamHome.shortName} vs {event.teamAway.shortName}
                            </p>

                            <TextField
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
                        </AdminRow>
                    ))}
                </>
            )}
        </>
    );
}

export default withAlert(AdminUpdateEvents);
