import { StyledDailyBonus } from './DailyBonus.css';
import { useContext } from 'react';
import Countdown from 'react-countdown';
import axiosConfig from '../../../utilities/axiosConfig';
import { AuthContext } from '../../../context/AuthContext';
import Currency from '../../../components/Currency/Currency';
import { useTranslation } from 'react-i18next';

function DailyBonus(): JSX.Element {
  const { t } = useTranslation();
  const { userData, setUserData } = useContext(AuthContext);

  const clickHandler = async () => {
    try {
      await axiosConfig.get('/bonus');
      setUserData({
        ...userData,
        points: userData.points! + 50,
        bonusDate: new Date()
      });
    } catch (err) {
      console.log(err);
    }
  };

  if (userData.bonusDate) {
    return (
      <StyledDailyBonus onClick={clickHandler}>
        {new Date().getTime() - new Date(userData.bonusDate).getTime() > 864e5 ? (
          <div className="value">
            {t('DAILY_BONUS.ACTIVE')} <Currency value={50} size={17} leftSpacing={2} />
          </div>
        ) : (
          <p>
            {t('DAILY_BONUS.INACTIVE')}{' '}
            <Countdown daysInHours={true} date={new Date(userData.bonusDate).getTime() + 864e5} />
          </p>
        )}
      </StyledDailyBonus>
    );
  }
  return <></>;
}

export default DailyBonus;
