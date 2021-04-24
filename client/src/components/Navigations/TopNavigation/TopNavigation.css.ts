import styled from 'styled-components';

export const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    padding: 10px 20px;
    position: fixed;
    width: 100%;
    z-index: 100;
    background-color: ${({ theme }) => theme.colors.black.dark};
    border-bottom: 1px solid black;

    .user-data {
        display: flex;
        align-items: center;
        min-width: 350px;
        justify-content: space-between;
    }
`;
