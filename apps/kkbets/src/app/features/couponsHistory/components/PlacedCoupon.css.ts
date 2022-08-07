import styled from 'styled-components';
import img from '../../../../assets/images/coupon-clip.svg';

export const StyledPlacedCoupon = styled.div`
  min-height: 300px;

  .info-line {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    font-size: 0.9rem;
    gap: 8px;
    font-weight: 600;

    .currency-wrapper {
      font-weight: 500;
    }
  }

  .events {
    background-color: ${({ theme }) => theme.colors.background.light};
    padding: 5px 0 10px;
    position: relative;
    border-radius: 4px;
    z-index: 1;

    &::after {
      content: '';
      position: absolute;

      width: 100%;
      height: 12px;
      background-color: ${({ theme }) => theme.colors.background.light};
      mask-image: url(${img});
    }

    &::after {
      left: 0;
      top: 99%;
    }
  }

  .coupon-info {
    transform: translateY(-10px);
    padding: 35px 15px 10px;
    background-color: ${({ theme }) => theme.colors.background.medium};
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-align: left;
  }

  .right {
    .info-line {
      margin-top: 6px;
    }
  }
`;
