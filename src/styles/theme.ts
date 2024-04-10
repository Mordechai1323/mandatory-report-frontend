import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}

interface Theme {
  colors: {
    background: string
    primary: string
    secondary: string
    border: string
    text: string
  }
}

const lightTheme: Theme = {
  colors: {
    background: '#FCFCFC',
    primary: '#FFFFFF',
    secondary: '#F4F4F4',
    border: '#DEDEDE',
    text: 'black',
  },
}

const darkTheme: Theme = {
  colors: {
    background: '#FCFCFC',
    primary: '#FFFFFF',
    secondary: '#F4F4F4',
    border: '#DEDEDE',
    text: 'black',
  },
}

export { darkTheme, lightTheme }
