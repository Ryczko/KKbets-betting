import Button from '../Button/Button';
import { AuthStyle } from './Auth.css';

function Auth(): JSX.Element {
  return (
    <AuthStyle>
      <Button click={() => window.open(`${process.env.NX_APP_API_URL || 'http://localhost:3333'}/api/google`, '_self')}>
        Login / Register
      </Button>
    </AuthStyle>
  );
}

export default Auth;
