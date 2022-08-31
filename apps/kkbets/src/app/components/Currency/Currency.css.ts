import styled from 'styled-components';
import { CurrencyProps } from './Currency';

export const StyledCurrency = styled.div<CurrencyProps>`
  display: flex;
  align-items: center;

  .value {
    line-height: 0;
  }

  svg {
    width: ${(props) => (props.size ? props.size + 'px' : '1.6rem')};
    margin-left: ${(props) => props.leftSpacing}px;
  }

  font-size: ${(props) => (props.size ? props.size + 'px' : '1.6rem')};

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${(props) => (props.size ? props.size + 'px' : '1.8rem')};
  }
`;
