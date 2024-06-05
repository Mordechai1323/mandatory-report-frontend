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
    success: string
  }
}

const baseColors = {
  white: '#FFFFFF',
  error: '#EE0004',
  gray: '#797979',
  border: '#DEDEDE',
  text: 'black',
  important: '#D30000',
  success: '#5CB85C',
}

const emergencyTheme: Theme = {
  colors: {
    ...baseColors,
    primary: '#9E1010',
    secondary: '#FFF8F8',
  },
}

const trainingTheme: Theme = {
  colors: {
    ...baseColors,
    primary: '#0D1E75',
    secondary: '#F9FAFF',
  },
}

export { trainingTheme, emergencyTheme }
