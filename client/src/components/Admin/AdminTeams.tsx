import { Snackbar } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import axios from 'axios';
import React, { useState } from 'react';
import Button from 'shared/Button/Button';
import Input from 'shared/Input/Input';
import Loader from 'shared/Spinner/Loader';
import { BACKEND_URL } from 'utilities/connection';

function AdminTeams(): JSX.Element {
    const [teamName, setTeamName] = useState('');
    const [teamShortname, setTeamShortname] = useState('');
    const [imageUrl, setImageUrl] = useState('');

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

    const teamNameChangeHandler = (val: string): void => {
        setTeamName(val);
    };
    const shortTeamNameChangeHandler = (val: string): void => {
        setTeamShortname(val);
    };
    const imageChangeHandler = (val: string): void => {
        setImageUrl(val);
    };

    const addCategoryHandler = async () => {
        try {
            setLoading(true);
            await axios.post(BACKEND_URL + '/teams', {
                name: teamName,
                shortName: teamShortname,
                image: imageUrl
            });
            setIsSuccessOpened(true);

            setTeamShortname('');
            setImageUrl('');
            setTeamName('');
        } catch (err) {
            setError(err.response.data);
            setIsErrorOpened(true);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            {loading ? (
                <Loader />
            ) : (
                <>
                    <Input placeholder="Team name" value={teamName} onChange={teamNameChangeHandler} />
                    <Input placeholder="Short team name" value={teamShortname} onChange={shortTeamNameChangeHandler} />
                    <Input placeholder="Image URL" value={imageUrl} onChange={imageChangeHandler} />

                    <Button fill style={{ padding: '10px 14px' }} click={addCategoryHandler}>
                        Add
                    </Button>
                </>
            )}
            <Snackbar open={isSuccessOpened} autoHideDuration={5000} onClose={handleClose}>
                <Alert variant="filled" onClose={handleClose} severity="success">
                    The category has been added
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

export default AdminTeams;
