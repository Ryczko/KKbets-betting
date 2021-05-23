import styled from 'styled-components';

export const StyledMessage = styled.div`
    display: flex;

    background-color: ${({ theme }) => theme.colors.background.medium};
    margin-bottom: 5px;
    border-radius: 4px;
    padding: 5px;

    .user {
        display: flex;
    }

    .message {
        .nickname {
            color: ${({ theme }) => theme.colors.font.light};
            font-size: 0.9rem;
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