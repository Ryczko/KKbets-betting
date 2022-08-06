import Coupon from '../../features/coupons/Coupon';
import { StyledRightPanel } from './RightPanel.css';

function RightPanel(): JSX.Element {
  return (
    <StyledRightPanel className="display-above-md">
      <Coupon />
    </StyledRightPanel>
  );
}

export default RightPanel;
