import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { viteSingleFile } from 'vite-plugin-singlefile';

// Der Build erzeugt eine einzige, eigenständige HTML-Datei (JS und CSS inline),
// die sich direkt per Doppelklick im Browser öffnen lässt (file://).
export default defineConfig({
  plugins: [react(), tailwindcss(), viteSingleFile()],
  build: {
    outDir: 'standalone',
    emptyOutDir: true,
  },
});
