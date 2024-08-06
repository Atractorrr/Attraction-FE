/* eslint-disable import/no-extraneous-dependencies */
import { Options } from 'tsup'
import { sassPlugin } from 'esbuild-sass-plugin'

const options: Options = {
  format: ['cjs', 'esm'],
  clean: true,
  sourcemap: 'inline',
  dts: true,
  entryPoints: ['src/index.ts', 'src/index.scss'],
  external: ['react', 'react-dom'],
  minify: true,
  esbuildPlugins: [sassPlugin({ type: 'css' })],
}

export default options
