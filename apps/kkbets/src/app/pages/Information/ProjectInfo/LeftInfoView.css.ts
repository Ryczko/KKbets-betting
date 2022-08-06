import styled from 'styled-components';

export const StyledLeftInfoView = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;

  .description {
    font-size: 0.9rem;
    flex-grow: 0.6;
  }

  i {
    font-size: 1.2rem;
  }

  .icon-copyright {
    font-size: 0.8rem;
  }

  h5 {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  h6 {
    margin-top: 10px;
  }
`;
