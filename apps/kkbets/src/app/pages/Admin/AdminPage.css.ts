import styled from 'styled-components';

export const StyledAdminPage = styled.div`
  background-color: ${(props) => props.theme.colors.background.medium};

  .tabs {
    border-radius: 4px;
  }

  .tab {
    background-color: ${(props) => props.theme.colors.background.light};
    color: white;
  }

  .MuiTabPanel-root {
    position: relative;
    overflow: hidden;
    padding-bottom: 16px;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;

    &.no-x-padding {
      position: static;
      padding-left: 0;
      padding-right: 0;
      padding-bottom: 0;
    }
  }
`;
