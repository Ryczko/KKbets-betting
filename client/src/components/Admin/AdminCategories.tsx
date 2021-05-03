import { Snackbar } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import axios from 'axios';
import React, { useState } from 'react';
import Button from 'shared/Button/Button';
import Input from 'shared/Input/Input';
import Loader from 'shared/Spinner/Loader';
import { BACKEND_URL } from 'utilities/connection';

function AdminCategories(): JSX.Element {
    const [value, setValue] = useState('');
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

    const handleChange = (val: string): void => {
        setValue(val);
    };

    const addCategoryHandler = async () => {
        try {
            setLoading(true);
            await axios.post(
                BACKEND_URL + '/categories',
                {
                    name: value
                },
                { withCredentials: true }
            );
            setIsSuccessOpened(true);

            setValue('');
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
                <div style={{ display: 'flex', width: '100%', alignItems: 'center' }}>
                    <Input placeholder="cateogry name" value={value} onChange={handleChange} />
                    <Button fill style={{ padding: '12px' }} click={addCategoryHandler}>
                        Add
                    </Button>
                </div>
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

export default AdminCategories;
