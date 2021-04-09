import styled from 'styled-components';

export const StyledBanner = styled.div`
    max-width: 100%;
    position: relative;
    height: 250px;
    overflow: hidden;
    margin: 0 auto 50px;
    border-radius: 20px;
    @media (max-width: 500px) {
        height: 200px;
    }
    img {
        display: block;
        width: 100%;
        border-radius: 20px;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }
`;
