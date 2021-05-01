import styled from 'styled-components';

export const StyledPlacedCoupon = styled.div`
    margin-top: 50px;
    min-height: 300px;
    padding: 30px 15px;
    border-radius: 15px;
    background-color: ${({ theme }) => theme.colors.black.theLightest};
    h4 {
        margin: 15px;
    }
`;
