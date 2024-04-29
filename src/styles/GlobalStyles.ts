import { createGlobalStyle } from 'styled-components'

import SegoeUIWoff from '../assets/fonts/SegoeUI.woff'
import SegoeUIWoff2 from '../assets/fonts/SegoeUI.woff2'
import SegoeUIBoldWoff from '../assets/fonts/SegoeUI-Bold.woff'
import SegoeUIBoldWoff2 from '../assets/fonts/SegoeUI-Bold.woff2'
import backgroundImage from '../assets/backgroundImage.jpeg'

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
        background-image: url(${backgroundImage});
        background-size: cover;
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


&::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background: #D9D9D9;
    border-radius: 6px;
  }


`
