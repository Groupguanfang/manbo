// @ts-check
import antfu from '@antfu/eslint-config'
import nuxt from './.nuxt/eslint.config.mjs'

export default antfu({
  unocss: true,
  formatters: true,
  yaml: true,
  markdown: true,
}).append(nuxt())
