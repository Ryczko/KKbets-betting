import styled from 'styled-components';

export const StyledCouponEvent = styled.div`
  background-color: ${({ theme }) => theme.colors.background.medium};
  padding: 10px 6px;
  border-radius: 4px;
  margin: 5px 0;

  display: flex;
  justify-content: space-between;

  .left {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    .event {
      font-size: 0.8rem;
    }

    .bet-type {
      font-size: 0.7rem;
    }
    .bet {
      color: ${({ theme }) => theme.colors.accent.light};
      font-size: 0.7rem;
    }
  }
  .right {
    display: flex;

    justify-content: flex-end;
    align-items: flex-start;
    span {
      margin: 0 3px;

      font-size: 0.9rem;
    }
  }

  i {
    cursor: pointer;
    font-size: 0.9rem;
  }
`;
