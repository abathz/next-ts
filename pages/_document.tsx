import * as React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'
import '../src/assets/scss'

export default class MyDocument extends Document {
  render () {
    return (
      <html>
        <Head>
          <title>NextJS</title>
          <link rel='stylesheet' href='/_next/static/style.css' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}