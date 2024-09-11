import {
  createTheme,
  ThemeProvider,
} from '@mui/material/styles'

const theme = createTheme({
  palette: {
    primary: {
      main: '#be3144',
    },
    secondary: {
      main: '#3a4750',
    },
  },
  typography: {
    fontFamily: [
      'Verdana',
      'Geneva',
      'Tahoma',
      'sans-serif',
    ].join(','),
  },
})

export default function StyleProvider(props) {
  return (
    <ThemeProvider theme={theme}>
      {props.children}
    </ThemeProvider>
  )
}
