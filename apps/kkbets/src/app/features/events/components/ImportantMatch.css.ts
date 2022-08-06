import styled from 'styled-components';

export const StyledImportantMatch = styled.div`
  border-radius: 4px;
  padding: 12px 14px 10px;
  background-color: ${({ theme }) => theme.colors.background.medium};
  text-align: left;
  color: ${({ theme }) => theme.colors.font.dark};

  h3 {
    color: ${({ theme }) => theme.colors.font.light};
    margin-bottom: 4px;
    font-size: 1rem;
  }

  .date {
    font-size: 0.8rem;
  }

  .match {
    text-align: center;
    margin: 16px 0 14px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .team-info {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      color: ${({ theme }) => theme.colors.font.dark};
      font-weight: 500;
      flex-basis: 33%;
      min-width: 115px;
    }

    .vs {
      font-size: 20px;
    }

    .team-image-container {
      overflow: hidden;
      margin-bottom: 5px;
    }

    img {
      width: 45px;
      height: 45px;
      object-fit: contain;

      @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
        width: 55px;
        height: 55px;
      }
    }
  }

  .buttons {
    display: flex;
    align-self: flex-end;
  }

  .hints {
    margin: 0 auto 3px;
  }

  .hint {
    flex-grow: 1;
    flex-basis: 33%;
    text-align: center;
    font-weight: 600;
    font-size: 0.8rem;
  }

  .course {
    padding: 6px 0;
    min-width: 55px;
    flex-grow: 1;
    flex-basis: 33%;
    color: ${({ theme }) => theme.colors.font.light};
    border: 2px solid transparent;
    background-color: ${({ theme }) => theme.colors.background.light};
    border-radius: 4px;
    margin: 0 5px;
    cursor: pointer;
    transition: 0.2s;

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
`;
