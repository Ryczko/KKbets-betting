import styled from 'styled-components';
import { CurrencyProps } from './Currency';

export const StyledCurrency = styled.div<CurrencyProps>`
  .currency {
    color: ${({ theme }) => theme.colors.accent.light};
    margin-left: ${(props) => props.leftSpacing}px;
  }

  font-size: ${(props) => (props.size ? props.size + 'px' : '1.6rem')};

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${(props) => (props.size ? props.size + 'px' : '1.8rem')};
  }
`;
