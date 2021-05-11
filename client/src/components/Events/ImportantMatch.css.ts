import styled from 'styled-components';

export const StyledImportantMatch = styled.div`
    border-radius: 10px;
    padding: 20px;
    background-color: ${({ theme }) => theme.colors.background.medium};
    text-align: left;
    color: ${({ theme }) => theme.colors.font.dark};

    h3 {
        color: ${({ theme }) => theme.colors.font.light};
        margin-bottom: 8px;
    }

    .date {
        font-size: 0.9rem;
    }

    .match {
        text-align: center;
        margin: 20px 0;
        display: flex;
        align-items: center;
        justify-content: space-around;

        .team-info {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            color: ${({ theme }) => theme.colors.font.dark};
        }

        .team-image-container {
            overflow: hidden;
            margin-bottom: 10px;
        }

        img {
            width: 70px;
            height: 70px;
            object-fit: contain;
        }
    }

    .buttons {
        display: flex;
    }

    .hints {
        margin: 5px auto;
    }

    .hint {
        flex-grow: 1;
        flex-basis: 33%;
        text-align: center;
        font-weight: 600;
    }

    .course {
        padding: 15px 0;
        min-width: 55px;
        flex-grow: 1;
        flex-basis: 33%;
        background-color: transparent;
        color: ${({ theme }) => theme.colors.font.light};
        border: 1px solid ${({ theme }) => theme.colors.font.dark};
        border-radius: 4px;
        margin: 0 7px;
        cursor: pointer;
        transition: 0.2s;

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
