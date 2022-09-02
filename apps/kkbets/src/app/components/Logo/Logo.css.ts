import styled from 'styled-components';

export const StyledLogo = styled.div`
  width: 135px;

  svg {
    height: 32px;
    margin-left: 4px;

    @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
      height: 36px;
    }
  }

  a {
    display: flex;
    align-items: center;
    font-size: 44px;
    line-height: 30px;
    font-weight: 800;
    padding: 5px 0;

    @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
      font-size: 52px;
    }
  }

  .first-letter {
    color: ${({ theme }) => theme.colors.accent.light};
  }

  .right-logo {
    margin-left: 7px;
    color: ${({ theme }) => theme.colors.font.light};
    font-size: 0.4em;
  }
`;
