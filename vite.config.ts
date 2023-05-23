import { defineConfig, loadEnv } from 'vite'
// import vue from '@vitejs/plugin-vue'
import { createVuePlugin } from 'vite-plugin-vue2'
import { fileURLToPath } from 'url'
import dts from 'vite-plugin-dts'

import typescript from '@rollup/plugin-typescript'
import { typescriptPaths } from 'rollup-plugin-typescript-paths'

// const envPath = '../../../../../.env'

import { resolve } from 'path'

// // https://vitejs.dev/config/
export default ({ mode }) => {
  // process.env = Object.assign(process.env, loadEnv(mode, envPath, ''))
  return defineConfig({
    build: {
      manifest: true,
      minify: true,
      reportCompressedSize: true,
      lib: {
        entry: resolve(__dirname, 'src/index.ts'),
        name: 'fw-users',
        formats: ['es', 'umd', 'cjs'],
        fileName: (format) => `fw-users.${format}.ts`,
      },
      rollupOptions: {
        // Externalize deps that shouldn't be bundled into the library.
        external: ['vue'],
        output: {
          globals: {
            vue: 'Vue',
          },
        },
        plugins: [
          typescriptPaths({
            preserveExtensions: true,
          }),
          typescript({
            sourceMap: false,
            declaration: true,
            outDir: 'dist',
          }),
        ],
      },
    },
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
      extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue'],
    },
    plugins: [dts(), createVuePlugin()],
  })
}
