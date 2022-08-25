import styled from 'styled-components';

export const AdminRow = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  margin-bottom: 8px;

  .event-details {
    flex-basis: 50%;
    display: flex;
    align-items: center;

    .name {
      margin: 0 10px;
    }
  }
`;
