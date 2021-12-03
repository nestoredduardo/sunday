import 'tailwindcss/tailwind.css'
import '../magic/index.css'

import { ThemeProvider, createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#7645D9',
    },
    secondary: {
      main: '#58EFFF',
    },
    success: {
      main: '#3ef1a7',
    },
  },
})

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
