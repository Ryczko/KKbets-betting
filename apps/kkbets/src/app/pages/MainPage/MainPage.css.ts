import styled from 'styled-components';

export const StyledMainPage = styled.div`
  .matches-container {
    margin: 10px auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
    grid-gap: 10px;

    @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    }
  }
`;
