import styled from 'styled-components';

export const StyledUserPage = styled.div`
    width: 90%;
    margin: 0 auto;

    .user-profile {
        display: flex;
        margin: 0 auto;
        background-color: ${({ theme }) => theme.colors.black.light};
        padding: 15px;
        margin-bottom: 20px;
        border-radius: 10px;
        .avatar {
            display: block;
            flex-basis: 20%;
        }
        .badges {
            .title {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                color: ${({ theme }) => theme.colors.white.dark};
                opacity: 0.7;
                font-size: 1.4rem;
            }
            flex-grow: 1;
            margin-left: 15px;
            background-color: ${({ theme }) => theme.colors.black.medium};
            min-height: 100%;
            position: relative;
        }
    }
    text-align: center;
`;
