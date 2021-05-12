import styled from 'styled-components';
import { MainViewProps } from './MainView';

export const StyledMainView = styled.div<MainViewProps>`
    flex-grow: 1;
    min-height: 60vh;
    padding-top: 80px;
    text-align: center;
    transition: 0.8s;
    margin: 0 auto;

    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
        max-width: 1460px;
        padding: 75px calc(20% + 20px) 25px ${({ tight }) => (tight ? '350px' : '80px')};
    }
`;
