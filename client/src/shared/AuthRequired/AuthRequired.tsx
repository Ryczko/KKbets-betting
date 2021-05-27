import Auth from 'components/Auth/Auth';
import React from 'react';
import Lock from './Lock';

function AuthRequired(): JSX.Element {
    return (
        <>
            <Lock />
            <h2 style={{ margin: '20px auto 25px' }}>You must be logged in to view this page</h2>
            <Auth />
        </>
    );
}

export default AuthRequired;
