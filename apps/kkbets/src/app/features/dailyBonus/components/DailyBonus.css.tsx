import styled from 'styled-components';

export const StyledDailyBonus = styled.div`
  background-color: ${({ theme }) => theme.colors.background.medium};
  padding: 15px;
  border-radius: 4px;
  margin-bottom: 10px;
  border: 2px solid ${({ theme }) => theme.colors.accent.dark};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: 0.3s;
  font-weight: 600;
  min-height: 54px;

  .value {
    display: flex;
    align-items: center;
    gap: 6px;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.accent.dark};
    /* color: ${({ theme }) => theme.colors.background.medium}; */
  }
`;
