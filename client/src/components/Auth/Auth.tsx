import Button from 'shared/Button/Button';
import { AuthStyle } from './Auth.css';

function Auth(): JSX.Element {
    return (
        <AuthStyle>
            <Button fill>Login</Button>
            <Button>Sign up</Button>
        </AuthStyle>
    );
}

export default Auth;
