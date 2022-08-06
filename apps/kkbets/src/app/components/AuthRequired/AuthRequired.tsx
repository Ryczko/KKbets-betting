import Auth from '../Auth/Auth';
import { StyledAuthRequired } from './AuthRequired.css';
import Lock from './Lock';

function AuthRequired(): JSX.Element {
  return (
    <StyledAuthRequired>
      <Lock />
      <h2 style={{ margin: '20px auto 25px' }}>You must be logged in to view this page</h2>
      <Auth />
    </StyledAuthRequired>
  );
}

export default AuthRequired;
