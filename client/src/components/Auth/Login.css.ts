import styled from 'styled-components';
import { LoginProps } from './Login';

export const StyledLogin = styled.div<LoginProps>`
    display: ${({ isOpened }) => (isOpened ? 'block' : 'none')};

    background-color: rgba(0, 0, 0, 0.8);
    margin: 0 auto;
    padding: 20px;
    border-radius: 5px;

    .invalid {
        margin: 5px 0;
    }

    .google-login {
        width: 90%;
        font-size: 16px;
        padding: 10px;
        display: block;
        margin: 0 auto;
    }

    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
        position: ${({ shortcut }) => (shortcut ? 'absolute' : 'static')};
        top: calc(100% + 15px);
        right: 56%;
        width: 350px;
        border: ${({ shortcut, theme }) => (shortcut ? '1px solid ' + theme.colors.green.light : 'none')};
        &::after {
            content: '';
            position: absolute;
            right: 25px;
            bottom: 100%;
            border-left: solid 10px transparent;
            border-right: solid 10px transparent;
            border-bottom: solid 10px ${({ theme }) => theme.colors.green.light};
        }
    }

    form {
        text-align: center;
    }
    button {
        margin-top: 10px;
    }
`;
