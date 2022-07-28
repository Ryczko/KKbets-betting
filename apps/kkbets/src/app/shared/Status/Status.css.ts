import styled from 'styled-components';
import { StatusProps } from './Status';

export const StyledStatus = styled.div<StatusProps>`
  i {
    width: 18px;
    height: 18px;
    background-color: ${({ status }) => {
      switch (status) {
        case 'winning': {
          return '#0BB659';
        }
        case 'lost': {
          return 'red';
        }
        case 'pending': {
          return 'orange';
        }
        default: {
          return 'orange';
        }
      }
    }};
    border-radius: 3px;
    margin: 0 auto;
    color: ${({ theme }) => theme.colors.font.light};
    display: flex;

    justify-content: center;
    align-items: center;
  }
`;
