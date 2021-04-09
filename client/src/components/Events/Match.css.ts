import styled from 'styled-components';

export const StyledMatch = styled.div`
    background-color: ${({ theme }) => theme.colors.black.medium};
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 10px;
    padding: 10px;
    flex-direction: column;
    margin: 5px 0;
    a {
        display: flex;
        align-items: center;
        flex-direction: column;

        flex-grow: 0.95;
        margin: 5px 0;
    }
    .date {
        flex-grow: 1;
        text-align: left;
    }

    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
        flex-direction: row;
        padding: 10px 20px;

        a {
            flex-direction: row;
        }
    }
    div {
        margin: 10px 0;
    }

    .teams {
        display: flex;
        flex-grow: 1;
        align-items: center;
        div {
            margin: 0 10px;
        }
    }
    .course {
        padding: 10px 0;
        width: 55px;
        background-color: transparent;
        color: white;
        border: 2px solid gray;
        border-radius: 8px;
        margin: 0 3px;
        cursor: pointer;

        &:focus {
            outline: none;
        }

        &.active {
            border-color: ${({ theme }) => theme.colors.green.light};
            background-color: ${({ theme }) => theme.colors.green.dark};
        }
    }
`;
