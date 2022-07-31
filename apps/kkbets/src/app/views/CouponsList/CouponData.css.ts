import styled from 'styled-components';

export const StyledCouponData = styled.div`
  background-color: ${({ theme }) => theme.colors.background.medium};
  border-radius: 4px;
  padding: 5px;
  margin: 4px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.8rem;
  text-align: center;

  .date {
    font-size: 0.7rem;
    flex-basis: 18%;
    text-align: left;
    min-width: 55px;
  }

  .amount {
    flex-basis: 31%;
    margin-left: 10px;
  }

  .win {
    flex-basis: 50%;
  }
`;
