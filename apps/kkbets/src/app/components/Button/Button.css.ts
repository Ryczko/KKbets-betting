import styled from 'styled-components';
import { ButtonProps } from './Button';

export const StyledButton = styled.button<ButtonProps>`
  background-color: ${({ fill, theme, color }) => (fill ? color || theme.colors.accent.light : 'transparent')};

  border: 2px solid ${({ theme, borderColor }) => borderColor || theme.colors.accent.light};
  ${({ blocked }) => blocked && 'border: 2px solid gray'};
  color: ${({ theme }) => theme.colors.font.light};
  padding: 0.4rem 0.8rem;
  outline: none;
  margin: 0 5px;
  cursor: ${({ blocked }) => (blocked ? 'not-allowed' : 'pointer')};
  ${({ blocked }) => blocked && 'background-color: gray'};
  border-radius: 4px;
  transition: 0.4s;

  box-shadow: ${({ fill, theme, blocked }) =>
    fill && !blocked ? '0px 0px 10px -5px ' + theme.colors.accent.light : 'none'};
`;
