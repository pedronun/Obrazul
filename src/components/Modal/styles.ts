import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    flex-direction: column;

    h2, span {
        color: #fff;
    }

    span {
        text-align: center;
        margin-top: 1rem;
    }

    input {
        background: transparent;
        border: none;
        margin-top: 1.5rem;
        width: 100%;
        text-align: center;

        padding-bottom: 1rem;

        border-bottom: 2px solid #fff;

        &::placeholder {
            color: #bdc3c7;
            font-size: 1rem;
        }
    }

    button {
        margin-top: 1rem;
        border: none;
        padding: 0.5rem;
        border-radius: 0.25rem;
        background: #59af34;
        color: #fff;
    }

`;