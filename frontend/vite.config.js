/* eslint-disable no-undef */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '@Components': path.resolve(__dirname, 'src/Components'),
      '@Avatar': path.resolve(__dirname, 'src/Components/Avatar/Avatar'),
    },
  },
  plugins: [react()],
})
