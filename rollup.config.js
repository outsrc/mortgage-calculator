import typescript from 'rollup-plugin-typescript2'
import filesize from 'rollup-plugin-filesize'
import nodeResolve from 'rollup-plugin-node-resolve'
import progress from 'rollup-plugin-progress'
import visualizer from 'rollup-plugin-visualizer'
import commonjs from 'rollup-plugin-commonjs'
import json from '@rollup/plugin-json'
import replace from 'rollup-plugin-replace'
import postcss from 'rollup-plugin-postcss'
import { terser } from 'rollup-plugin-terser'
import pkg from './package.json'

export default {
  input: 'src/index.tsx',
  output: [
    {
      file: `build/${pkg.name}.js`,
      format: 'umd',
      name: pkg.name.replace('-', '_'),
      sourcemap: false
    }
  ],
  context: 'window',
  plugins: [
    progress(),
    nodeResolve({
      browser: true
    }),
    json(),
    typescript({
      rollupCommonJSResolveHack: true,
      exclude: ['src/__tests__/**', 'src/**/*.stories.*'],
      clean: true
    }),
    commonjs({
      include: ['node_modules/**'],
      namedExports: {
        'node_modules/react/index.js': [
          'Children',
          'Component',
          'PropTypes',
          'createElement',
          'useState',
          'useMemo'
        ],
        'node_modules/react-dom/index.js': ['render']
      }
    }),
    postcss({
      plugins: [require('postcss-import'), require('tailwindcss'), require('autoprefixer')]
    }),
    visualizer(),
    filesize(),
    replace({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    terser()
  ]
}
