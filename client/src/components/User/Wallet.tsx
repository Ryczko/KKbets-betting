import { AuthContext } from 'context/AuthContext';
import React, { useContext } from 'react';
import Button from 'shared/Button/Button';
import { StyledWallet } from './Wallet.css';

function Wallet(): JSX.Element {
    const { userData } = useContext(AuthContext);
    return (
        <StyledWallet>
            <span>
                {userData.points} <span className="currency">$</span>
            </span>
            <Button>Add tips</Button>
        </StyledWallet>
    );
}

export default Wallet;
