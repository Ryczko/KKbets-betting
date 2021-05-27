import styled from 'styled-components';

export const StyledPlacedCouponEvent = styled.div`
    width: 100%;
    border-bottom: 2px dashed ${({ theme }) => theme.colors.background.medium};
    padding: 5px 15px 15px;
    border-radius: 5px;
    margin: 10px 0;
    text-align: left;
    font-size: 0.9rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    &:last-of-type {
        border-bottom: none;
        padding-bottom: 0;
    }

    .left {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-direction: column;
        width: 90%;

        & > div {
            margin-bottom: 15px;

            &:last-child {
                margin-bottom: 0;
            }
        }

        @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
            flex-direction: row;

            & > div {
                margin-bottom: 0;
            }
        }
    }

    .teams-info {
        display: flex;

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
`;
