import React from 'react'
import App, { Container } from 'next/app'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'
import reducers from 'reducers'
import Head from 'next/head'
import NextSEO from 'next-seo'
import SEO from '../src/seo.config'
import '../src/assets/scss'

const store = createStore(reducers, applyMiddleware(ReduxThunk))

export default class MyApp extends App {
  render () {
    const { Component, pageProps } = this.props
    return (
      <Container>
        <Head>
          <title>NextJS</title>
        </Head>
        <NextSEO config={SEO} />
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </Container>
    )
  }
}
