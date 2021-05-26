import styled from 'styled-components';

export const StyledChat = styled.div`
    margin-top: 12px;
    border-radius: 4px;
    text-align: center;
    position: relative;

    .messages {
        overflow-x: hidden;
        display: flex;
        flex-direction: column-reverse;
        background-color: ${({ theme }) => theme.colors.background.dark};
        margin-bottom: 40px;
    }

    .bottom {
        background-color: ${({ theme }) => theme.colors.background.dark};
        position: fixed;
        bottom: 45px;
        width: calc(100% - 30px);
        padding: 10px 0 15px;
    }

    form {
        margin-top: 4px;
        display: flex;
        justify-content: center;
        border-radius: 4px;

        input {
            border: none;
            background-color: ${({ theme }) => theme.colors.background.medium};
            width: 100%;
            color: white;
            padding: 10px;
            font-size: 0.9rem;
            border-radius: 5px;
            margin-right: 5px;

            &:focus {
                outline: none;
            }
        }
    }

    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
        .bottom {
            background-color: transparent;
            padding: 0;
            position: static;
            width: 100%;
        }

        .messages {
            height: 75vh;
            margin-bottom: 0;
        }
    }
`;
