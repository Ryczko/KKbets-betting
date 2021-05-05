import styled from 'styled-components';
import { StatusProps } from './Status';

export const StyledStatus = styled.div<StatusProps>`
    width: 18px;
    height: 18px;
    background-color: ${({ status, theme }) => {
        switch (status) {
            case 'winning': {
                return theme.colors.green.light;
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
    color: white;
    display: flex;

    justify-content: center;
    align-items: center;
`;
