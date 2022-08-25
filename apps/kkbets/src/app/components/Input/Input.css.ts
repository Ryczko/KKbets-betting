import styled from 'styled-components';

export const StyledInput = styled.div`
  width: 100%;
  input {
    background-color: ${({ theme }) => theme.colors.background.light};
    padding: 14px;
    letter-spacing: 1px;
    font-size: 1rem;
    border: none;
    color: ${({ theme }) => theme.colors.font.light};
    outline: none;
    width: 100%;
    border-radius: 5px;
  }
  label {
    display: block;
  }
  small {
    display: block;
    max-width: 500px;
    margin: 0 auto;
    text-align: left;
    font-size: 12px;
    padding-left: 5px;
    margin-bottom: 10px;
  }
`;
