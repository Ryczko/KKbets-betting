import styled from 'styled-components';

export const StyledRankingPlace = styled.div`
    background-color: ${({ theme }) => theme.colors.black.medium};
    padding: 8px;
    margin: 2px 0;
    display: flex;
    align-items: center;

    h6 {
        flex-basis: 33%;
        flex-grow: 1;
        font-size: 0.9rem;
    }

    .number {
        flex-basis: 10%;
    }

    .name {
        flex-basis: 70%;
    }

    .points {
    }
`;
