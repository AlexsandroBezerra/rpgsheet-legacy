import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'
import { ThemeProvider } from 'styled-components'

import { darkTheme } from '~/styles/themes/dark'
import { GlobalTheme } from '~/styles/global'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={darkTheme}>
      <SessionProvider session={pageProps.session}>
        <Component {...pageProps} />
      </SessionProvider>

      <GlobalTheme />
    </ThemeProvider>
  )
}

export default MyApp
