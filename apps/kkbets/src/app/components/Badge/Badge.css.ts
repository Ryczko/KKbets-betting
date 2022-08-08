import styled from 'styled-components';

interface StyledBadgeProps {
  width?: number;
}

export const StyledBadge = styled.div<StyledBadgeProps>`
  display: flex;
  align-items: center;
  position: relative;

  .loader {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  .badge {
    width: ${(props) => (props.width ? props.width : '60')}px;
    margin: 10px;
  }

  &:hover {
    transform: scale(1.1);
  }
`;
