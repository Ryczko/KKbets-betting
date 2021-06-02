import { AuthContext } from 'context/AuthContext';
import React, { useContext } from 'react';
import { StyledWallet } from './Wallet.css';

function Wallet(): JSX.Element {
    const { userData } = useContext(AuthContext);
    return (
        <StyledWallet>
            <span>
                {userData.points} <span className="currency">$</span>
            </span>
        </StyledWallet>
    );
}

export default Wallet;
