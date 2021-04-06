import styled from 'styled-components';
import { MainViewProps } from './MainView';

export const StyledMainView = styled.div<MainViewProps>`
    flex-grow: 1;
    min-height: 60vh;
    text-align: center;
    transition: 0.8s;
    margin: 0 auto;
    max-width: 1450px;
    padding: 75px calc(20% + 20px) 25px ${({ tight }) => (tight ? '350px' : '80px')};
`;
