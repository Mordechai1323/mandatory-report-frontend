import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}

interface Theme {
  colors: {
    white: string
    primary: string
    secondary: string
    error: string
    gray: string
    border: string
    text: string
    important: string
  }
}

const emergencyTheme: Theme = {
  colors: {
    white: '#FFFFFF',
    primary: '#9E1010',
    secondary: '#FFF8F8',
    error: '#EE0004',
    gray: '#797979',
    border: '#DEDEDE',
    text: 'black',
    important: '#D30000',
  },
}

const trainingTheme: Theme = {
  colors: {
    white: '#FFFFFF',
    primary: '#0D1E75',
    secondary: '#F9FAFF',
    error: '#EE0004',
    gray: '#797979',
    border: '#DEDEDE',
    text: 'black',
    important: '#D30000',
  },
}

export { trainingTheme, emergencyTheme }
