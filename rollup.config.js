import vue from 'rollup-plugin-vue'
import buble from 'rollup-plugin-buble'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import { rollup } from 'rollup'
import { name } from './package.json'

function camelize(name) {
  // replace -letter by Letter
  return name.replace(/-([a-z])/g, g => g[1].toUpperCase())
}

const config = {
  input: 'src/main.js',
  output: [
    { format: 'es', file: `dist/${name}.js` },
    { format: 'cjs', file: `dist/${name}.common.js` },
    { format: 'iife', file: `dist/${name}.min.js`, name: camelize(name) }
  ],
  plugins: [
    vue(),
    buble(),
    resolve({
      jsnext: true,
      main: true,
      browser: true
    }),
    commonjs()

  ]
}

export default config
