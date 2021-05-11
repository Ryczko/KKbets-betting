import styled from 'styled-components';

interface LeftNavigationViewStyleProps {
    active: boolean;
}

export const StyledLeftNavigationView = styled.div<LeftNavigationViewStyleProps>`
    background-color: ${({ theme }) => theme.colors.background.light};
    transition: 0.8s;
    left: 60px;
    padding: 100px 10px 25px 10px;
    height: 100vh;
    width: 270px;
    position: fixed;
    top: 0;
    transform: translateX(${({ active }) => (active ? '0' : '-100%')});

    .closeBtn {
        position: absolute;
        right: 10px;
        top: 75px;
        cursor: pointer;

        i {
            font-size: 25px;
            transition: 0.8s;
            display: block;
            transform: translateX(${({ active }) => (active ? '0px' : '-50px')});
        }
    }
`;
