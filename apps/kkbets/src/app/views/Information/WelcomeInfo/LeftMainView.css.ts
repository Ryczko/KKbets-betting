import styled from 'styled-components';

export const StyledLeftMainView = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;

  .title {
    font-size: 25px;
  }

  img {
    margin-top: 20px;
    width: 160px;
  }

  .badges {
    h3 {
      margin-bottom: 22px;
    }

    .badges-box {
      display: flex;
      justify-content: center;
    }
  }

  .description {
    margin-top: 35px;
    font-weight: 600;
    line-height: 22px;
    flex-grow: 1;
  }
`;
