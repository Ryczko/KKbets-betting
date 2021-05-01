import styled from 'styled-components';

export const StyledPlacedCouponEvent = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    background-color: ${({ theme }) => theme.colors.black.medium};
    padding: 20px;
    border-radius: 5px;
    margin: 15px 0;

    .teams-info {
        flex-basis: 50%;
        display: flex;
        justify-content: space-around;
        align-items: center;

        .team-image-container {
            overflow: hidden;
            display: inline-block;
            img {
                width: 40px;
                height: 40px;
                object-fit: contain;
            }
        }
    }
    .bet-info {
        flex-basis: 20%;
    }
`;
