import styled from 'styled-components';
import img from '../../../assets/images/coupon-clip.svg';

export const StyledCoupon = styled.div`
  padding: 10px 8px 20px;
  background-color: ${({ theme }) => theme.colors.background.light};
  min-height: 300px;
  z-index: 2;
  position: relative;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    margin: 43px 10px 20px 0;
  }

  .error {
    background-color: rgba(255, 99, 71, 0.8);
    height: 0px;
    border-radius: 4px;
    transition: 0.4s;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;

    &.active {
      height: 50px;
    }
  }

  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 12px;
    background-color: ${({ theme }) => theme.colors.background.light};
    mask-image: url(${img});
  }

  &::before {
    left: 0;
    bottom: 99%;
    transform: rotate(180deg);
  }
  &::after {
    left: 0;
    top: 99%;
  }

  .item-enter {
    opacity: 0;
    transform: translateX(200px);
  }
  .item-enter-active {
    opacity: 1;
    transform: translateX(0px);
    transition: 500ms;
  }

  .top {
    margin-top: 20px;
    font-size: 1.2rem;
    margin-bottom: 15px;
    transform: translateX(5px);
    position: relative;

    i {
      cursor: pointer;
    }
  }

  .events {
    overflow-y: auto;
    overflow-x: hidden;
    margin-bottom: 15px;

    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
      max-height: 300px;
    }
  }

  .bottom {
    .amount {
      margin-bottom: 15px;
      display: flex;
      justify-content: space-around;
      .value-field {
        background-color: ${({ theme }) => theme.colors.background.medium};
        padding: 10px;
        width: 30%;
        letter-spacing: 1px;
        font-size: 0.9rem;
        border: none;
        color: ${({ theme }) => theme.colors.font.light};
        outline: none;
        text-align: center;
        border-radius: 5px;
      }
      .slider {
        width: 60%;
      }
    }

    .info {
      display: flex;
      justify-content: space-around;
      margin-bottom: 15px;

      span {
        display: block;

        &:nth-child(1) {
          font-size: 0.7rem;
        }
        &:nth-child(2) {
          font-size: 1.3rem;
        }
      }
    }
  }
`;
