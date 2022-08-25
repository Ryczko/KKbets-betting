import styled from 'styled-components';

export const StyledUserSettings = styled.div`
  background-color: ${({ theme }) => theme.colors.background.medium};
  padding: 20px 15px;

  h2 {
    margin-bottom: 15px;
  }

  input {
    margin: 8px 0;
  }
`;
