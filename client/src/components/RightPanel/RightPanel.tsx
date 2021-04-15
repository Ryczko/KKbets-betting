import Coupon from 'components/Coupon/Coupon';
import { StyledRightPanel } from './RightPanel.css';

function RightPanel(): JSX.Element {
    return (
        <StyledRightPanel className="display-above-md">
            <Coupon
                events={[{ eventId: '123', eventName: 'Barcelona-PSG', betType: 'Winner', course: 3.3, userBet: '1' }]}
                amount={100}
                totalRate={100}
                possibleWinning={10000}
            />
        </StyledRightPanel>
    );
}

export default RightPanel;
