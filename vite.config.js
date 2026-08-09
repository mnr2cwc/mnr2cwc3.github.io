import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// GitHub Pages for this repo is set to "Deploy from a branch" -> main -> /
// (root), so whatever sits at the repo root is what gets served. The Vite
// source therefore lives in app/ and the build writes its output to the repo
// root, where Pages can pick it up directly.
export default defineConfig({
  plugins: [vue()],
  root: 'app',
  // Repo is mnr2cwc/mnr2cwc3.github.io — the name doesn't match the owner
  // (mnr2cwc), so it's a project page served under /mnr2cwc3.github.io/.
  base: '/mnr2cwc3.github.io/',
  build: {
    outDir: '..',
    // Never wipe the repo root — it holds the source, not just build output.
    emptyOutDir: false,
    rollupOptions: {
      output: {
        // Stable filenames so repeated builds overwrite rather than pile up
        // hashed copies in the committed assets/ dir.
        entryFileNames: 'assets/[name].js',
        chunkFileNames: 'assets/[name].js',
        assetFileNames: 'assets/[name].[ext]',
      },
    },
  },
})
