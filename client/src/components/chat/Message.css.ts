import styled from 'styled-components';

interface MessageStyleProps {
    admin?: boolean;
}

export const StyledMessage = styled.div<MessageStyleProps>`
    display: flex;
    border-bottom: 1px solid ${({ theme }) => theme.colors.accent.dark};
    padding: 10px 5px;

    &:last-of-type {
        border-bottom: none;
    }

    .head {
        display: flex;
        justify-content: space-between;
        width: 100%;

        .date {
            font-size: 0.7rem;
            min-width: 55px;
        }
    }

    .message {
        .nickname {
            color: ${({ theme, admin }) => (admin ? theme.colors.accent.light : theme.colors.font.light)};
            font-weight: ${({ admin }) => (admin ? 700 : 500)};
            font-size: 0.9rem;
            margin-bottom: 7px;
        }

        flex-basis: 80%;
        flex-grow: 1;
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
