import styled from 'styled-components';

export const StyledCouponData = styled.div`
    background-color: ${({ theme }) => theme.colors.background.medium};
    padding: 8px 0;
    margin: 2px 0;
    display: flex;
    align-items: center;

    h6 {
        flex-basis: 33%;
        flex-grow: 1;
        font-size: 0.9rem;
    }
`;
