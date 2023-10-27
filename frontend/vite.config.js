/* eslint-disable no-undef */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      //Components
      '@Components': path.resolve(__dirname, 'src/components'),
      '@Header': path.resolve(__dirname, 'src/components/header/'),
      '@Aside': path.resolve(__dirname, 'src/components/aside'),
      '@UserList': path.resolve(__dirname, 'src/components/userlist'),
      '@UserCard': path.resolve(__dirname, 'src/components/usercard'),
      '@Plus': path.resolve(__dirname, 'src/components/plus'),
      '@Trends': path.resolve(__dirname, 'src/components/trends'),
      '@Search': path.resolve(__dirname, 'src/components/search'),
      '@NavBar': path.resolve(__dirname, 'src/components/navbar'),
      '@Post': path.resolve(__dirname, 'src/components/main/post'),
      '@PostButtons': path.resolve(__dirname, 'src/components/main/post/interactionbuttons'),
      '@PostContent': path.resolve(__dirname, 'src/components/main/post/postcontent'),
      '@UserHeader': path.resolve(__dirname, 'src/components/main/post/userheader'),
      '@Icons': path.resolve(__dirname, 'src/components/icons'),
      '@Avatar': path.resolve(__dirname, 'src/components/avatar'),
      '@HistoriesContainer': path.resolve(__dirname, 'src/components/historias/contenedorhistorias'),
      '@HistoriesCreate': path.resolve(__dirname, 'src/components/historias/crearhistoria'),
      '@HistoriesModal': path.resolve(__dirname, 'src/components/historias/modalhistorias'),
      '@Histories': path.resolve(__dirname, 'src/components/historias/historia'),
      '@Welcome': path.resolve(__dirname, 'src/components/bienvenida'),
      '@FormError': path.resolve(__dirname, 'src/components/formulario/errortype'),
      '@InputForm': path.resolve(__dirname, 'src/components/inputform'),
      '@CreatePost': path.resolve(__dirname, 'src/components/main/createpost'),

      //pages

      '@pages': path.resolve(__dirname, 'src/pages'),

      //store

      '@store': path.resolve(__dirname, 'src/store'),

      //assets
      '@logo': path.resolve(__dirname, 'src/assets/img/logoLinkUp.png'),
      '@loginImg': path.resolve(__dirname, 'src/assets/loginimage.png/'),

    },
  },
  plugins: [react()],
})
