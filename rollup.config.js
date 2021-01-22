import dts from 'rollup-plugin-dts';
import typescript from '@rollup/plugin-typescript';
import copy from 'rollup-plugin-copy';
import shebang from 'rollup-plugin-preserve-shebang';

const name = require('./package.json').main.replace(/\.js$/, '');

const bundle = (config) => ({
  ...config,
  input: 'src/oury.ts',
  external: (id) => !/^[./]/.test(id),
});

export default [
  bundle({
    plugins: [
      typescript(),
      shebang(),
      copy({
        targets: [
          { src: 'src/template/', dest: 'dist/' },
        ],
      }),
    ],
    output: [
      {
        file: `${name}.js`,
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: `${name}.mjs`,
        format: 'es',
        sourcemap: true,
      },
    ],
  }),
  bundle({
    plugins: [dts()],
    output: {
      file: `${name}.d.ts`,
      format: 'es',
    },
  }),
];
