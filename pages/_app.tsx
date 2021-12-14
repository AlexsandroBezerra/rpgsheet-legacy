import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'
import { ChakraProvider } from '@chakra-ui/react'

import { SidebarDrawerProvider } from '~/contexts/sidebar-drawer'
import { theme } from '~/assets/theme'
import { SEO } from '~/components/seo'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <ChakraProvider theme={theme}>
        <SidebarDrawerProvider>
          <Component {...pageProps} />
        </SidebarDrawerProvider>
      </ChakraProvider>

      <SEO />
    </SessionProvider>
  )
}

export default MyApp
