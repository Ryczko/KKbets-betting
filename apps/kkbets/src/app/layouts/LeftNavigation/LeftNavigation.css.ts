import styled from 'styled-components';

export const StyledLeftNavigation = styled.aside`
  display: none;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: block;
    position: fixed;
    left: 0;
    top: 0;
    width: 60px;
    height: 100vh;
    padding: 65px 10px 10px 10px;
    background-color: ${({ theme }) => theme.colors.background.medium};
    z-index: 99;

    i {
      display: block;
      padding: 7px 0;
      cursor: pointer;
      font-size: 30px;
    }

    .left-nav-icon {
      position: relative;

      &.active {
        i {
          color: ${({ theme }) => theme.colors.accent.light};
        }

        &::after {
          content: '';
          width: 4px;
          height: 4px;
          background-color: ${({ theme }) => theme.colors.accent.light};
          border-radius: 50%;
          left: -3px;
          top: 50%;
          transform: translateY(-50%);
          position: absolute;
        }
      }
    }
  }
`;
