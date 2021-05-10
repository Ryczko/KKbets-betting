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
    background-color: ${({ theme }) => theme.colors.black.dark};

    ul {
        display: flex;
        justify-content: space-around;
        list-style-type: none;
    }

    a {
        font-size: 1.8rem;
        color: ${({ theme }) => theme.colors.white.dark};

        &.active {
            color: ${({ theme }) => theme.colors.green.light};
        }
    }

    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
        display: none;
    }
`;
