import styled from 'styled-components';

export const StyledUserBadges = styled.div`
  padding: 20px 10px 10px;
  background-color: ${({ theme }) => theme.colors.background.medium};
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;

  h2 {
    font-weight: 500;
    font-size: 20px;
    color: ${({ theme }) => theme.colors.accent.light};
    transform: translateX(-8px);

    i {
      margin-right: 4px;
    }
  }

  .badges {
    min-height: 105px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 0 5px;

    .no-badges {
      color: ${({ theme }) => theme.colors.font.dark};
      font-size: 1.1rem;
      text-align: center;
      opacity: 0.7;
      font-weight: 500;
    }
  }
`;
