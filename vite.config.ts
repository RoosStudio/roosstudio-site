import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { SITE_ORIGIN } from './src/seo/siteOrigin'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    {
      name: 'rs-inject-site-origin',
      transformIndexHtml(html) {
        return html.replaceAll('%SITE_ORIGIN%', SITE_ORIGIN)
      },
    },
  ],
})
