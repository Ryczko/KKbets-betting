import styled from 'styled-components';

export const StyledCouponEvent = styled.div`
    background-color: ${({ theme }) => theme.colors.black.theLightest};
    padding: 10px 6px;
    border-radius: 5px;
    margin: 5px 0;

    display: flex;
    justify-content: space-between;

    .left {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        a {
            text-align: left;
        }

        .event {
            font-size: 0.8rem;
        }

        .bet-type {
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
        .bet {
            color: ${({ theme }) => theme.colors.green.light};
        }
    }

    i {
        cursor: pointer;
        font-size: 0.9rem;
    }
`;
