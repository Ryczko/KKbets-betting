import { Snackbar } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import React, { useState } from 'react';

export interface WithAlertProps {
    setError?: (val: string) => void;
    setIsSuccessOpened?: (val: boolean) => void;
    setIsErrorOpened?: (val: boolean) => void;
}

const withAlert = (Component: React.ComponentType<WithAlertProps>): React.FC<WithAlertProps> => (props) => {
    const [isSuccessOpened, setIsSuccessOpened] = useState(false);
    const [isErrorOpened, setIsErrorOpened] = useState(false);
    const [error, setError] = useState('');

    const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        setIsSuccessOpened(false);
        setIsErrorOpened(false);
    };

    return (
        <>
            <Component
                {...props}
                setError={setError}
                setIsErrorOpened={setIsErrorOpened}
                setIsSuccessOpened={setIsSuccessOpened}
            />
            <Snackbar open={isSuccessOpened} autoHideDuration={5000} onClose={handleClose}>
                <Alert variant="filled" onClose={handleClose} severity="success">
                    Success
                </Alert>
            </Snackbar>
            <Snackbar open={isErrorOpened} autoHideDuration={5000} onClose={handleClose}>
                <Alert variant="filled" onClose={handleClose} severity="error">
                    {error}
                </Alert>
            </Snackbar>
        </>
    );
};

export default withAlert;
