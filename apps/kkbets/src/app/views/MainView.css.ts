import styled from 'styled-components';
import { MainViewProps } from './MainView';

export const StyledMainView = styled.div<MainViewProps>`
  flex-grow: 1;
  min-height: 60vh;
  padding: 60px 15px 20px 15px;
  text-align: center;
  transition: 0.8s;
  margin: 0 auto;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    box-sizing: content-box;
    max-width: 1100px;
    padding: 60px calc(21% + 20px) 25px ${({ tight }) => (tight ? '380px' : '80px')};
  }
`;
