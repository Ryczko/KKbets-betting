import styled from 'styled-components';

export const StyledLeftMainView = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;

    .title {
        padding: 12px 0 20px 0;
    }

    .description {
        margin-top: 20px;
        font-weight: 600;
        line-height: 22px;
        flex-grow: 1;
    }
`;
