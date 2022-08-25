import styled from 'styled-components';
import { LoaderProps } from './Loader';

export const StyledLoader = styled.div<LoaderProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: ${(props) => (props.minHeight !== undefined ? props.minHeight : '200')}px;
`;
