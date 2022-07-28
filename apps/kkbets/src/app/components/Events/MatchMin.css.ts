import styled from 'styled-components';

export const StyledMatchMin = styled.div`
  background-color: ${({ theme }) => theme.colors.background.medium};
  border-radius: 4px;
  padding: 6px 14px;

  margin-top: 10px;

  .event-data {
    color: ${({ theme }) => theme.colors.font.light};
    min-width: 185px;
  }

  .date {
    display: none;
  }

  .buttons {
    display: flex;
    width: 100%;
  }

  .hints {
    margin-top: 10px;
    margin-bottom: 2px;
  }

  .hint {
    width: 100%;
    text-align: center;
    font-weight: 500;
    font-size: 0.7rem;
    margin: 0 3px;
  }

  .course {
    margin: 0 3px;
    width: 100%;
    background-color: transparent;
    border: none;
    border: 2px solid transparent;
    color: ${({ theme }) => theme.colors.font.light};
    background-color: ${({ theme }) => theme.colors.background.light};
    border-radius: 4px;
    cursor: pointer;
    transition: 0.2s;
    padding: 3px 0;

    &:hover {
      border: 2px solid ${({ theme }) => theme.colors.font.dark};
    }

    &:focus {
      outline: none;
    }

    &.active {
      background-color: ${({ theme }) => theme.colors.accent.dark};
      border: 2px solid transparent;
      transform: scale(0.95);
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 3px 14px 5px;

    .date {
      font-size: 0.8rem;
      margin-top: 3px;
      color: ${({ theme }) => theme.colors.font.dark};
      display: block;
    }

    .course {
      width: 48px;
    }

    .hints {
      margin-top: 0;
    }

    .hint {
      width: 48px;
    }

    .teams {
      text-align: left;
    }
    .date {
      text-align: left;
    }
  }
`;
