import React from 'react'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'

import { ChallengeProvider } from '../contexcts/ChallengeContext'

import GlobalStyle from '../styles/global'

import theme from '../styles/theme'

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />

      <ThemeProvider theme={theme}>
        <ChallengeProvider>
          <Component {...pageProps} />

          <Head>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="Move - it" content="Aplicação para poder se manter em movimento" />

            <title>Move It</title>
          </Head>
        </ChallengeProvider>
      </ThemeProvider>
    </>
  )
}
