import styled from 'styled-components';

export const StyledRightPanel = styled.aside`
    background-color: ${({ theme }) => theme.colors.black.medium};
    text-align: center;
    display: block;
    width: 20%;
    position: fixed;
    right: 0;
    top: 0;
    height: 100vh;
    padding: 75px 10px 25px 10px;
`;
