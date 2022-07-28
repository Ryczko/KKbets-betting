import styled from 'styled-components';

export const StyledMobileNavigation = styled.aside`
  background-color: red;
  padding: 10px 0;
  position: fixed;
  bottom: 0;
  border-top: 1px solid black;
  left: 0;
  z-index: 1000;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background.dark};

  ul {
    display: flex;
    justify-content: space-around;
    list-style-type: none;
  }

  a {
    font-size: 1.6rem;
    color: ${({ theme }) => theme.colors.font.dark};

    &.active {
      color: ${({ theme }) => theme.colors.accent.light};
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
    a {
      font-size: 1.8rem;
    }
  }
`;
