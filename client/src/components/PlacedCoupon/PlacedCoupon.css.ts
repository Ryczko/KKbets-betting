import styled from 'styled-components';

export const StyledPlacedCoupon = styled.div`
    margin-top: 50px;
    min-height: 300px;
    padding: 30px 15px;
    background-color: ${({ theme }) => theme.colors.background.light};

    h4 {
        margin: 15px;
    }
`;
