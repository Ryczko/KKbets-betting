import styled from 'styled-components';

export const StyledWallet = styled.div`
    display: flex;

    span {
        font-size: 1.8rem;
        margin-right: 5px;
        letter-spacing: 1px;

        .currency {
            color: ${({ theme }) => theme.colors.green.light};
        }
    }
`;
