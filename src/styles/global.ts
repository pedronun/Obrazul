import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    html {
        @media (max-width: 1080px) {
            font-size: 93.75%;
        }

        @media (max-width: 720px) {
            font-size: 87.5%;
        }
    }

    body {
        background: #fff;
    }

    body, input, textarea, button {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
    }

    button {
        cursor: pointer;
    }

    .react-modal-overlay {
        background: rgba(0, 0, 0, 0.5);

        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;

        display: flex;
        align-items: center;
        justify-content: center;
    }

    .react-modal-content {
        width: 100%;
        max-width: 576px;

        background: #1a62d6;

        padding: 3rem;
        position: relative;
        border-radius: 0.25rem;
        
        &:focus {
            outline: 0;
        }
    }

    .react-modal-close {
        position: absolute;
        right: 1.5rem;
        top: 1.5rem;
        border: 0;
        background: transparent;
        transition: filter 0.2s;

        &:focus {
            outline: 0;
        }

        &:hover {
            filter: brightness(0.8)
        }
    }

    ::-webkit-scrollbar {
        width: 6px;
    }

    ::-webkit-scrollbar-thumb {
        background: #1a62d6;
        border-radius: 10px;
    }

    ::-webkit-scrollbar-track {
        background: rgba(26,98,214,.2);
        border-radius: 10px;
    }
    
    :root {
        --nav: #1A62D8;

        --text-title: #363F5F;
        --text-body: #969CB3;

        --border: #1A62D6;
    }
`;
