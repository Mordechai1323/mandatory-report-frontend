import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    }

    body {
        background-color: ${(props) => props.theme.colors.background};
        font-family: "Open Sans", sans-serif;
        direction: rtl;
    }
    h1, h2, h3, h4, h5, h6, p , span, a {
        color: ${(props) => props.theme.colors.text};
    }
    a {
        text-decoration: none;
    }
    ul {
        list-style: none;
    }
    button {
        background-color: ${(props) => props.theme.colors.primary};
        border: none;
        color: ${(props) => props.theme.colors.text};
        cursor: pointer;

        &:hover{
            background-color: ${(props) => props.theme.colors.secondary};
        }
    }
    input {
        border: 1px solid #ccc;
        border-radius: 5px;
        padding: 0.5rem;
        outline: none;
    }
    select {
        cursor: pointer;
    }
    textarea {
        border: 1px solid #ccc;
        border-radius: 5px;
        padding: 0.5rem;
        outline: none;
    }
    table {
        border-collapse: collapse;
        width: 100%;
    }
    th, td {
        border: 1px solid #ccc;
        padding: 0.5rem;
    }

    

    `
