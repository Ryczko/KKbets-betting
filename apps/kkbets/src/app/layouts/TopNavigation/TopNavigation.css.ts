import styled from 'styled-components';

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 5px 11px;
  position: fixed;
  width: 100%;
  z-index: 100;
  background-color: ${({ theme }) => theme.colors.background.dark};
  border-bottom: 1px solid ${({ theme }) => theme.colors.background.dark};
  height: 55px;

  .user-data {
    display: flex;
    align-items: center;
    justify-content: flex-end;

    @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
      justify-content: space-between;
      min-width: 200px;
    }

    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
      min-width: 250px;
    }
  }
`;
