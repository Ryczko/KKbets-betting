import React from 'react';
import { StyledLoader } from './Loader.css';

function Loader(): JSX.Element {
    return (
        <StyledLoader>
            <div className="shadow"></div>
            <div className="gravity">
                <div className="ball"></div>
            </div>
        </StyledLoader>
    );
}

export default Loader;
