import { fileURLToPath } from 'node:url'
import { configure } from 'quasar/wrappers'

export default configure(() => ({
  boot: [],
  css: ['app.scss'],
  extras: ['material-icons'],
  build: {
    target: {
      browser: ['es2022', 'firefox115', 'chrome115', 'safari14'],
      node: 'node22'
    },
    vueRouterMode: 'history',
    publicPath: '/',
    distDir: 'dist/spa',
    alias: {
      // Catalog, pricing and settings shared with the Cloud Functions.
      shared: fileURLToPath(new URL('./functions/shared', import.meta.url))
    }
  },
  devServer: {
    open: true
  },
  framework: {
    config: {},
    plugins: []
  }
}))
