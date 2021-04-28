import styled from 'styled-components';

export const StyledInput = styled.div`
    input {
        background-color: ${({ theme }) => theme.colors.black.light};
        padding: 10px;
        letter-spacing: 1px;
        margin: 0.5rem auto;
        font-size: 0.9rem;
        border: none;
        color: white;
        outline: none;
        width: 100%;
        border-radius: 5px;
    }
    label {
        display: block;
    }
    small {
        display: block;
        max-width: 500px;
        margin: 0 auto;
        text-align: left;
        font-size: 12px;
        padding-left: 5px;
        margin-bottom: 10px;
    }
`;
