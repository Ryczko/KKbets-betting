import styled from 'styled-components';

export const StyledUserPage = styled.div`
  margin: 0 auto;

  .user-profile {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    background-color: ${({ theme }) => theme.colors.background.light};
    padding: 15px;
    margin-bottom: 20px;
    border-radius: 4px;

    .avatar-box {
      margin: 0 auto;
      margin-bottom: 15px;
    }

    .badges {
      .title {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
        color: ${({ theme }) => theme.colors.font.dark};
        opacity: 0.7;
        font-size: 1.2rem;
      }

      flex-grow: 1;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      position: relative;
      min-height: 50px;
    }

    @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
      flex-direction: row;

      .avatar-box {
        margin-bottom: 0px;
      }

      .badges {
        min-height: 100%;
        margin-left: 25px;
        justify-content: flex-start;
        min-height: auto;
      }
    }
  }
  text-align: center;
`;
