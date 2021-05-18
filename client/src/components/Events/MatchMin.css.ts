import styled from 'styled-components';

export const StyledMatchMin = styled.div`
    background-color: ${({ theme }) => theme.colors.background.medium};

    border-radius: 10px;
    padding: 15px 20px;
    flex-direction: column;

    .top {
        display: flex;
        justify-content: space-between;
        width: 100%;
        margin-bottom: 20px;
        color: ${({ theme }) => theme.colors.font.light};
    }

    .date {
        text-align: left;
        padding: 0 5px;
        font-size: 0.9rem;
    }

    .teams {
        text-align: left;
        padding: 0 5px;
    }

    .buttons {
        display: flex;
        width: 100%;
    }

    .hints {
        margin-bottom: 5px;
    }

    .hint {
        flex-grow: 1;
        flex-basis: 33%;
        text-align: center;
        font-weight: 600;
    }

    .course {
        flex-grow: 1;
        flex-basis: 33%;
        background-color: transparent;
        color: ${({ theme }) => theme.colors.font.light};
        border: 1px solid ${({ theme }) => theme.colors.font.dark};
        border-radius: 4px;
        margin: 0 5px;
        cursor: pointer;
        transition: 0.2s;
        padding: 10px 0;

        &:focus {
            outline: none;
        }

        &.active {
            border-color: ${({ theme }) => theme.colors.accent.light};
            background-color: ${({ theme }) => theme.colors.accent.dark};
            transform: scale(0.95);
        }
    }
`;
