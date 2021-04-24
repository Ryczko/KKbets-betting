import { StyledLogin } from './Login.css';

export interface LoginProps {
    isOpened: boolean;
    shortcut: boolean;
}

function Login(props: LoginProps): JSX.Element {
    return (
        <StyledLogin isOpened={props.isOpened} shortcut={props.shortcut}>
            <button className="google-login" onClick={() => window.open('http://localhost:3001/google', '_self')}>
                Kontynuuj przez Google
            </button>
        </StyledLogin>
    );
}

export default Login;
