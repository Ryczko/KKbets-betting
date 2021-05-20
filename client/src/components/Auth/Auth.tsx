import Button from 'shared/Button/Button';
import { AuthStyle } from './Auth.css';

function Auth(): JSX.Element {
    return (
        <AuthStyle>
            <Button
                click={() =>
                    window.open(`${process.env.REACT_APP_API_URL || 'http://localhost:3001'}/api/google`, '_self')
                }
            >
                Login / Register
            </Button>
        </AuthStyle>
    );
}

export default Auth;
