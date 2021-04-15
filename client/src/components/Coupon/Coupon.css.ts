import styled from 'styled-components';
import img from 'assets/images/coupon.png';

export const StyledCoupon = styled.div`
    padding: 15px 6px 10px 10px;
    background-color: #3b3e3f;
    min-height: 200px;
    margin: 30px auto;
    position: relative;

    &::before {
        content: '';
        display: block;
        position: absolute;
        width: 100%;
        height: 14px;
        background-repeat: repeat-x;
        background-size: contain;
        left: 0;
        bottom: 99%;
        transform: rotate(180deg);
        background-image: url(${img});
    }
    &::after {
        content: '';
        display: block;
        position: absolute;
        width: 100%;
        height: 14px;
        background-repeat: repeat-x;
        background-size: contain;
        left: 0;
        top: 100%;
        background-image: url(${img});
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
    .item-exit {
        opacity: 1;
        transform: translateX(0px);
    }
    .item-exit-active {
        opacity: 0;
        transform: translateX(200px);
        transition: 500ms;
    }

    .top {
        margin-top: 20px;
        font-size: 1.2rem;
        margin-bottom: 15px;
        position: relative;

        i {
            cursor: pointer;
        }
        .icon-resize-full {
            font-size: 0.9rem;
            position: absolute;
            left: -5px;
            top: 3px;
        }
    }

    .events {
        padding-right: 5px;
        overflow-y: auto;
        overflow-x: hidden;

        margin-bottom: 15px;
    }
    .bottom {
        .amount {
            margin-bottom: 15px;
            display: flex;
            justify-content: space-around;
            .value-field {
                background-color: ${({ theme }) => theme.colors.black.theLightest};
                padding: 10px;
                width: 30%;
                letter-spacing: 1px;
                font-size: 0.9rem;
                border: none;
                color: white;
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
                    font-size: 1.5rem;
                }
            }
        }
    }
`;
