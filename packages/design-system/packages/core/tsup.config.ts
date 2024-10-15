import { Options } from 'tsup'
import { postcssModules, sassPlugin } from 'esbuild-sass-plugin'

const options: Options = {
  format: ['cjs', 'esm'],
  clean: true,
  sourcemap: 'inline',
  dts: true,
  entryPoints: ['src/index.ts'],
  external: ['react', 'react-dom'],
  minify: true,
  esbuildPlugins: [
    sassPlugin({
      filter: /\.module\.scss$/,
      transform: postcssModules({}),
    }),
    sassPlugin({
      filter: /\.scss$/,
    }),
  ],
}

export default options
