import styled from 'styled-components';

export const StyledPlacedCouponEvent = styled.div`
  width: 100%;
  border-bottom: 2px dashed ${({ theme }) => theme.colors.background.medium};
  padding: 5px 12px 15px;
  border-radius: 5px;
  margin: 10px 0;
  text-align: left;
  font-size: 0.9rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  &:last-of-type {
    border-bottom: none;
    padding-bottom: 0;
  }

  .event-info {
    order: 1;
    .bet-type,
    .course {
      font-size: 0.8rem;
    }

    .date {
      margin-bottom: 5px;
    }

    .value {
      color: ${({ theme }) => theme.colors.accent.light};
    }
  }

  .teams-info {
    display: flex;
    order: 0;
    flex-basis: 100%;
    justify-content: center;
    margin-bottom: 20px;

    .team {
      text-align: center;
      width: 80px;
    }

    span {
      margin-top: 20px;
    }

    img {
      width: 35px;
      height: 35px;
      object-fit: contain;
      margin-bottom: 3px;
    }
  }

  .more-info {
    display: flex;
    order: 2;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    .event-info {
      order: 0;
    }

    .teams-info {
      order: 0;
      flex-basis: auto;
      margin-bottom: 0;
    }

    .more-info {
      order: 0;
    }
  }

  .score {
    width: 40px;
    text-align: center;
    background-color: ${({ theme }) => theme.colors.background.medium};
    color: ${({ theme }) => theme.colors.font.light};
    border-radius: 4px;
    padding: 4px;
    margin-right: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
