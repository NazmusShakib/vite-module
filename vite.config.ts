import { defineConfig } from 'vite'
// import vue from '@vitejs/plugin-vue'
import { createVuePlugin } from 'vite-plugin-vue2'
import { fileURLToPath } from 'url'
import dts from 'vite-plugin-dts'

import { resolve } from 'path'

// // https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'fw-users',
      formats: ['es', 'umd'],
      //fileName: (format) => `vite-sixth.${format}.ts`,
    },
    rollupOptions: {
      // Externalize deps that shouldn't be bundled into the library.
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  plugins: [dts(), createVuePlugin()],
})
