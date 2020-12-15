import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from 'rollup-plugin-typescript2'
import { terser } from "rollup-plugin-terser";
import babel from '@rollup/plugin-babel'
import postcss from 'rollup-plugin-postcss'
import autoprefixer from 'autoprefixer'

export default {
  input: 'src/index.ts',
  output: [
    { file: 'dist/build.umd.js', name: 'build', format: 'umd' },
  ],
  plugins: [
    resolve(),
    commonjs(),
    typescript(),
    babel({
      exclude: 'node_modules/**',
      babelHelpers: 'bundled',
      extensions: ['.js', '.ts']
    }),
    postcss({
      extract: 'outline.css',
      extensions: ['scss', 'css'],
      minimize: true,
      plugins: [autoprefixer()]
    }),
    terser({ output: { comments: false } })
  ]
}