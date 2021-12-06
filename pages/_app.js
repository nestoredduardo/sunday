import 'tailwindcss/tailwind.css'
import '../magic/index.css'

import { ThemeProvider, createTheme } from '@mui/material/styles'
import generateStore from '@store'
import { Provider } from 'react-redux'

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

const store = generateStore()

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  )
}

export default MyApp
