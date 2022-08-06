import styled from 'styled-components';

export const StyledWallet = styled.div`
  display: flex;

  span {
    font-size: 1.6rem;
    margin-right: 0;
    letter-spacing: 0.2px;

    &.currency {
      color: ${({ theme }) => theme.colors.accent.light};
    }

    @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
      font-size: 1.8rem;
      margin-right: 5px;
      letter-spacing: 1px;
    }
  }
`;
