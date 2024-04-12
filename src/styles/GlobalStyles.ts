import { createGlobalStyle } from 'styled-components'

import SegoeUIWoff from '../assets/fonts/SegoeUI.woff'
import SegoeUIWoff2 from '../assets/fonts/SegoeUI.woff2'
import SegoeUIBoldWoff from '../assets/fonts/SegoeUI-Bold.woff'
import SegoeUIBoldWoff2 from '../assets/fonts/SegoeUI-Bold.woff2'

export const GlobalStyles = createGlobalStyle`

    @font-face {
        font-family: 'Segoe UI';
        src: local('Segoe UI'), local('SegoeUI'),
        url(${SegoeUIWoff2}) format('woff2')
        url(${SegoeUIWoff}) format('woff');
        font-weight: normal;
        font-style: normal;
    }

    @font-face {
        font-family: 'Segoe UI';
        src: local('Segoe UI'), local('SegoeUI'),
        url(${SegoeUIBoldWoff2}) format('woff2')
        url(${SegoeUIBoldWoff}) format('woff');
        font-weight: bold;
        font-style: normal;
    }

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body {
        background-color: ${(props) => props.theme.colors.background};
        font-family: 'Segoe UI', sans-serif;
        direction: rtl;
    }

    h1, h2, h3, h4,  h5, h6, p, span, a {
        color: ${(props) => props.theme.colors.text};
    }

    a {
        text-decoration: none;
    }

    ul {
        list-style: none;
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
