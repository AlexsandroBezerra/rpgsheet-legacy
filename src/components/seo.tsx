import Head from 'next/head'

const APP_URL = process.env.NEXTAUTH_URL || `https://${process.env.VERCEL_URL}` || ''

const pageTitle = 'rpgsheet - Crie as fichas dos seus personagens de RPG'
const pageImage = `${APP_URL}/og-image.png`
const description =
  'Com o rpgsheet, você cria fichas de personagens e usa as fichas em sessões de RPG presenciais com o celular, ou sessões online direto do computador.'

export function SEO() {
  return (
    <Head>
      <meta name="title" content={pageTitle} />
      <meta name="description" content={description} />

      <meta httpEquiv="x-ua-compatible" content="IE=edge,chrome=1" />
      <meta name="MobileOptimized" content="320" />
      <meta name="HandheldFriendly" content="True" />
      <meta name="theme-color" content="#181B23" />
      <meta name="msapplication-TileColor" content="#181B23" />
      <meta name="referrer" content="no-referrer-when-downgrade" />
      <meta name="google" content="notranslate" />

      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={pageTitle} />
      <meta property="og:image" content={pageImage} />
      <meta property="og:image:secure_url" content={pageImage} />
      <meta property="og:image:alt" content="Logo da rpgsheet" />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@_sandrobez" />
      <meta name="twitter:creator" content="@_sandrobez" />
      <meta name="twitter:image" content={pageImage} />
      <meta name="twitter:image:src" content={pageImage} />
      <meta name="twitter:image:alt" content="Logo da rpgsheet" />
      <meta name="twitter:image:width" content="1200" />
      <meta name="twitter:image:height" content="620" />
    </Head>
  )
}
