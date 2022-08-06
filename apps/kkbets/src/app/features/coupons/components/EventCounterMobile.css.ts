import styled from 'styled-components';

export const StyledEventCounterMobile = styled.div`
  color: ${({ theme }) => theme.colors.font.light};
  position: fixed;
  z-index: 101;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  bottom: 70px;
  cursor: pointer;
  right: 20px;

  background-color: ${({ theme }) => theme.colors.accent.dark};
  border: 2px solid ${({ theme }) => theme.colors.accent.light};
  width: 50px;
  height: 50px;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;
