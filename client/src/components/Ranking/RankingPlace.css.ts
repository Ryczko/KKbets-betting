import styled from 'styled-components';

export const StyledRankingPlace = styled.div`
    background-color: ${({ theme }) => theme.colors.background.medium};
    border-radius: 4px;
    max-width: 400px;
    margin: 4px auto;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .name {
        flex-basis: 50%;
        word-break: break-word;
        text-align: left;
        font-size: 12px;
    }

    .points {
        flex-basis: 20%;
        text-align: center;
        font-size: 13px;
    }
`;
