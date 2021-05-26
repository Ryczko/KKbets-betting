import styled from 'styled-components';

interface MessageStyleProps {
    admin?: boolean;
}

export const StyledMessage = styled.div<MessageStyleProps>`
    display: flex;

    margin-bottom: 5px;
    border-radius: 4px;
    padding: 5px;

    .user {
        display: flex;
    }

    .message {
        .nickname {
            color: ${({ theme, admin }) => (admin ? theme.colors.accent.light : theme.colors.font.light)};
            font-weight: ${({ admin }) => (admin ? 700 : 500)};
            font-size: 0.9rem;
            margin-bottom: 7px;
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
