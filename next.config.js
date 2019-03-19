const path = require('path')
const webpack = require('webpack')
const withCss = require('@zeit/next-css')
const withSass = require('@zeit/next-sass')
const withTypescript = require('@zeit/next-typescript')
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin')

module.exports = withTypescript(withCss(withSass({
  webpack(config) {
    config.resolve.extensions.push('.js')
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      containers: path.resolve(__dirname, './src/containers'),
      components: path.resolve(__dirname, './src/components'),
      actions: path.resolve(__dirname, './src/actions'),
      reducers: path.resolve(__dirname, './src/reducers'),
      routes: path.resolve(__dirname, './routes'),
      styled: path.resolve(__dirname, './src/styled-components')
    }

    config.plugins.push(new LodashModuleReplacementPlugin())
    config.plugins.push(new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/))

    return config
  }
})))
