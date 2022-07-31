import styled from 'styled-components';

export const StyledChat = styled.div`
  margin-top: 12px;
  border-radius: 4px;
  text-align: center;
  position: relative;

  .messages {
    position: relative;
    overflow-x: hidden;
    background-color: ${({ theme }) => theme.colors.background.dark};
    border-radius: 4px;
    margin-top: 40px;
  }

  .top {
    background-color: ${({ theme }) => theme.colors.background.dark};
    position: fixed;
    z-index: 10;
    top: 50px;
    width: calc(100% - 30px);
    padding: 8px 0;
  }

  form {
    margin-top: 4px;
    display: flex;
    justify-content: center;
    border-radius: 4px;

    input {
      border: none;
      background-color: ${({ theme }) => theme.colors.background.medium};
      width: 100%;
      color: white;
      padding: 10px;
      font-size: 0.9rem;
      border-radius: 5px;
      margin-right: 5px;

      &:focus {
        outline: none;
      }
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    .top {
      background-color: transparent;
      padding: 0;
      position: static;
      width: 100%;
      margin-bottom: 6px;
    }

    .messages {
      height: 75vh;
      margin-top: 0;
    }
  }
`;
