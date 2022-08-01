import { Alert, Snackbar } from '@mui/material';
import React, { useState } from 'react';
import styled from 'styled-components';

export interface WithAlertProps {
  setError: (val: string) => void;
  setIsSuccessOpened: (val: boolean) => void;
  setIsErrorOpened: (val: boolean) => void;
}

const StyledAlert = styled.div`
  .alert {
    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
      bottom: 55px;
    }
  }
`;

const withAlert =
  (Component: React.ComponentType<WithAlertProps>, successMessage?: string): React.FC =>
  (props: any) => {
    const [isSuccessOpened, setIsSuccessOpened] = useState(false);
    const [isErrorOpened, setIsErrorOpened] = useState(false);
    const [error, setError] = useState('');

    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
      if (reason === 'clickaway') {
        return;
      }
      setIsSuccessOpened(false);
      setIsErrorOpened(false);
    };

    return (
      <StyledAlert>
        <Component
          {...props}
          setError={setError}
          setIsErrorOpened={setIsErrorOpened}
          setIsSuccessOpened={setIsSuccessOpened}
        />
        <Snackbar
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
          className="alert"
          open={isSuccessOpened}
          autoHideDuration={4000}
          onClose={handleClose}
        >
          <Alert variant="filled" onClose={handleClose} severity="success">
            {successMessage || 'Success'}
          </Alert>
        </Snackbar>

        <Snackbar
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
          className="alert"
          open={isErrorOpened}
          autoHideDuration={4000}
          onClose={handleClose}
        >
          <Alert variant="filled" onClose={handleClose} severity="error">
            {error}
          </Alert>
        </Snackbar>
      </StyledAlert>
    );
  };

export default withAlert;
