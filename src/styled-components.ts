import * as styledComponents from 'styled-components'

interface ThemeInterface {
  primaryColor: string
  secondColor: string
}

const {
  default: styled,
  css,
  createGlobalStyle,
  keyframes,
  ThemeProvider
} = styledComponents as styledComponents.ThemedStyledComponentsModule<ThemeInterface>

export { css, createGlobalStyle, keyframes, ThemeProvider }
export default styled
