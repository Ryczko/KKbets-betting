import styled from 'styled-components';

export const StyledRankingPlace = styled.div`
  margin: 4px auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .place {
    width: 18px;
    text-align: center;
    font-weight: 600;
    font-size: 15px;
    margin-right: 7px;
  }

  .user-data {
    border-radius: 4px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${({ theme }) => theme.colors.background.medium};

    .name {
      flex-basis: 55%;
      word-break: break-word;
      text-align: left;
      font-size: 12px;
    }

    .points {
      flex-basis: 20%;
      text-align: center;
      font-size: 13px;
    }
  }
`;
