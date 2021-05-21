import styled from 'styled-components';

export const StyledChat = styled.div`
    margin-top: 10px;

    border-radius: 4px;
    text-align: center;
    position: relative;
    height: 70%;

    .messages {
        height: 100%;
        overflow-x: hidden;
    }

    .bottom {
        margin-top: 10px;
    }

    form {
        display: flex;
        width: 100%;
        justify-content: center;

        input {
            border: none;
            background-color: ${({ theme }) => theme.colors.background.medium};
            width: 100%;
            color: white;
            padding: 5px 10px;
            font-size: 0.8rem;
            border-radius: 5px;
            &:focus {
                outline: none;
            }
        }
    }
`;
