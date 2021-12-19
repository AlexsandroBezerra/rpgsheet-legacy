import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'
import { ThemeProvider } from 'styled-components'

import { darkTheme } from '~/styles/themes/dark'
import { GlobalTheme } from '~/styles/global'
import { ToastProvider } from '~/contexts/Toast/ToastProvider'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={darkTheme}>
      <ToastProvider>
        <SessionProvider session={pageProps.session}>
          <Component {...pageProps} />
        </SessionProvider>

        <GlobalTheme />
      </ToastProvider>
    </ThemeProvider>
  )
}

export default MyApp
