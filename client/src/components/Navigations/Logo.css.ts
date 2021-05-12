import styled from 'styled-components';

export const StyledLogo = styled.div`
    margin-top: 2px;
    width: 135px;

    a {
        display: flex;
        align-items: center;
        font-size: 52px;
        line-height: 30px;
        font-weight: 800;
        padding: 5px 0 7px;
    }

    .first-letter {
        color: ${({ theme }) => theme.colors.accent.light};
    }

    .right-logo {
        margin-left: 7px;
        color: ${({ theme }) => theme.colors.font.light};
        font-size: 0.4em;
    }
`;
