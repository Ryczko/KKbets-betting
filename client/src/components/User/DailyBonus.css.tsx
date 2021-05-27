import styled from 'styled-components';

export const StyledDailyBonus = styled.div`
    background-color: ${({ theme }) => theme.colors.background.medium};
    padding: 15px;
    border-radius: 4px;
    margin-bottom: 10px;
    border: 1px solid ${({ theme }) => theme.colors.accent.light};
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: 0.3s;
    font-weight: 600;

    &:hover {
        background-color: ${({ theme }) => theme.colors.accent.light};
        color: ${({ theme }) => theme.colors.background.medium};
    }
`;
