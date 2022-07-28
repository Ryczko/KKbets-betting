import Coupon from '../Coupon/Coupon';
import { StyledRightPanel } from './RightPanel.css';

function RightPanel(): JSX.Element {
  return (
    <StyledRightPanel className="display-above-md">
      <Coupon />
    </StyledRightPanel>
  );
}

export default RightPanel;
