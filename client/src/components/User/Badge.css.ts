import styled from 'styled-components';

export const StyledBadge = styled.div`
    display: flex;
    align-items: center;

    .badge {
        width: 60px;
    }

    &:hover {
        transform: scale(1.1);
    }
`;
