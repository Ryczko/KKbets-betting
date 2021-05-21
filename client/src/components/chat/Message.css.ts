import styled from 'styled-components';

export const StyledMessage = styled.div`
    display: flex;

    background-color: ${({ theme }) => theme.colors.background.medium};
    padding: 5px;
    margin-bottom: 5px;
    border-radius: 4px;
    .user {
        display: flex;
    }

    .message {
        .nickname {
            color: white;
            font-size: 0.9rem;
            margin-bottom: 5px;
        }
        flex-basis: 80%;
        font-size: 0.8rem;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        text-align: left;
        word-break: break-word;
        margin-left: 10px;
    }
`;
