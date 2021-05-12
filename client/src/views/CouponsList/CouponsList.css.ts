import styled from 'styled-components';

export const StyledCouponsList = styled.div`
    text-align: center;

    .title {
        margin-bottom: 20px;
        i {
            font-size: 1rem;
            line-height: 50px;
        }
    }

    .coupons-list {
        overflow-y: auto;
    }

    .info {
        display: flex;
        margin-bottom: 5px;
        h5 {
            flex-basis: 33%;
            flex-grow: 1;
        }
    }

    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
        .coupons-list {
            max-height: 400px;
        }
    }
`;
