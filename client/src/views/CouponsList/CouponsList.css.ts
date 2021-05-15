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
            text-align: left;
        }

        .amount {
            flex-basis: 32%;
        }

        .win {
            flex-basis: 50%;
        }
    }

    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
        padding: 0;

        .coupons-list {
            max-height: 400px;
        }
    }
`;
