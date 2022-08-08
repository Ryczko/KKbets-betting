import styled from 'styled-components';

export const StyledUserData = styled.div`
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.background.light};
  padding: 15px;
  position: relative;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;

  .owner-buttons {
    display: flex;
    justify-content: flex-end;
    margin-top: 15px;
    flex-wrap: wrap;
    gap: 10px;

    .btn {
      margin: 0;
      padding: 10px;
      flex-grow: 1;
      min-width: 200px;
    }
  }

  .top {
    display: flex;
    gap: 20px;

    .left {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .right {
      text-align: left;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .highlight {
        font-weight: 600;
        margin-right: 4px;
      }

      .info-line {
        display: flex;
        align-items: center;
        margin-top: 8px;
      }
    }
  }

  .username {
    color: ${({ theme }) => theme.colors.accent.light};
  }
`;
