import styled from 'styled-components';
import { MainViewProps } from './MainView';

export const StyledMainView = styled.div<MainViewProps>`
    flex-grow: 1;
    min-height: 60vh;
    padding: 70px 15px 20px 15px;
    text-align: center;
    transition: 0.8s;
    margin: 0 auto;

    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
        max-width: 1460px;
        padding: 65px calc(21% + 20px) 25px ${({ tight }) => (tight ? '380px' : '80px')};
    }
`;
