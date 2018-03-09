import vue from 'rollup-plugin-vue'
import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import { name } from './package.json'

function camelize(name) {
  // replace -letter by Letter
  return name.replace(/-([a-z])/g, g => g[1].toUpperCase())
}

const config = {
  input: 'src/main.js',
  output: [
    // es6 module format
    { format: 'es', file: `dist/${name}.js` },
    // commonjs module format (for require?)
    { format: 'cjs', file: `dist/${name}.common.js` },
    // global variable (camel case version of package.json name)
    { format: 'iife', file: `dist/${name}.min.js`, name: camelize(name) }
  ],
  plugins: [
    vue({
      css: `dist/${name}.css`
    }),
    babel(),
    resolve({
      jsnext: true,
      main: true,
      browser: true
    }),
    // convert commonjs to es6
    commonjs()

  ]
}

export default config
