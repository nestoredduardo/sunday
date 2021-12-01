import Head from 'next/head'
import { ThemeProvider, createTheme } from '@mui/material/styles'

import Layout from '@components/Layout'

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

export default function Home() {
  return (
    <>
      <Head>
        <meta charset="utf-8" />
        <link rel="icon" href="/images/logo.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Sunday</title>
        <meta name="title" content="Sunday" />
      </Head>
      <>
        <ThemeProvider theme={theme}>
          <Layout></Layout>
        </ThemeProvider>
      </>
    </>
  )
}
