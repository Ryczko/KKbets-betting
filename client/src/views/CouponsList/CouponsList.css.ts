import styled from 'styled-components';

export const StyledCouponsList = styled.div`
    text-align: center;

    margin-top: 12px;

    .coupons-list {
        overflow-y: auto;
        padding-right: 3px;
    }

    .info {
        display: flex;
        margin-bottom: 5px;
        justify-content: space-between;
        padding: 0px 5px 0px 5px;
        text-align: center;
        font-size: 0.9rem;

        .date {
            flex-basis: 18%;
            min-width: 55px;
            text-align: left;
        }

        .amount {
            flex-basis: 32%;
            margin-left: 10px;
        }

        .win {
            flex-basis: 50%;
        }
    }

    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
        padding: 0;

        .coupons-list {
            height: 77vh;
        }
    }
`;
