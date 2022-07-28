import styled from 'styled-components';

export const StyledTopPlaces = styled.div`
  max-width: 270px;
  margin: 0 auto;
  position: relative;
  height: 100px;
  margin-bottom: 50px;

  .field {
    position: absolute;
    width: 70px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .name {
    word-break: break-word;
    text-align: center;
    width: 100px;
    height: 40px;
    font-size: 12px;
  }

  .place {
    color: ${({ theme }) => theme.colors.font.light};
    font-weight: 700;
    margin-bottom: 5px;
  }

  .points {
    margin: 5px 0 2px;
    color: ${({ theme }) => theme.colors.accent.light};
    flex-basis: 20%;
    text-align: center;
    width: 100px;
  }
`;
