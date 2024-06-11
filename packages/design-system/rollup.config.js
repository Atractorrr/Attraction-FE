import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import terser from '@rollup/plugin-terser'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import typescript from 'rollup-plugin-typescript2'
import postcss from 'rollup-plugin-postcss'
import { dts } from 'rollup-plugin-dts'
import packageJson from './package.json'

function tailwindcss() {
  return postcss({
    config: {
      path: './postcss.config.mjs',
      ctx: {},
    },
    extensions: ['.css'],
    minimize: true,
    inject: {
      insertAt: 'top',
    },
  })
}

const config = [
  {
    input: 'src/index.ts',
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: 'es',
        sourcemap: true,
      },
    ],
    plugins: [
      tailwindcss(),
      peerDepsExternal(),
      resolve(),
      commonjs(),
      terser(),
      typescript({ tsconfig: './tsconfig.json' }),
    ],
    external: ['react', 'react-dom'],
  },
  {
    input: 'src/index.ts',
    output: [{ file: packageJson.types, format: 'es' }],
    plugins: [tailwindcss(), dts()],
  },
]

export default config
