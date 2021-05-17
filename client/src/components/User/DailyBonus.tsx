import { AuthContext } from 'context/AuthContext';
import axiosConfig from 'utilities/axiosConfig';
import { StyledDailyBonus } from './DailyBonus.css';
import { useContext } from 'react';

function DailyBonus(): JSX.Element {
    const { userData, setUserData } = useContext(AuthContext);

    const clickHandler = async () => {
        try {
            await axiosConfig.get('/bonus');
            setUserData({ ...userData, points: userData.points! + 50, bonusDate: new Date() });
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <StyledDailyBonus onClick={clickHandler}>
            <p>Click to claim daily 50$ </p>
        </StyledDailyBonus>
    );
}

export default DailyBonus;
