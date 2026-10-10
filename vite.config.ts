import { defineConfig, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { viteSingleFile } from 'vite-plugin-singlefile';

/**
 * Macht aus dem eingebetteten ES-Modul ein klassisches Skript am Ende von <body>.
 * So läuft die Datei auch per Doppelklick (file://) in jedem Browser.
 */
function classicInlineScript(): Plugin {
  return {
    name: 'classic-inline-script',
    enforce: 'post',
    // Läuft nach viteSingleFile, das JS und CSS erst in generateBundle einbettet.
    generateBundle(_, bundle) {
      const asset = bundle['index.html'];
      if (!asset || asset.type !== 'asset' || typeof asset.source !== 'string') return;
      const html = asset.source;
      const match = html.match(/<script type="module" crossorigin>([\s\S]*?)<\/script>/);
      if (!match) this.error('Eingebettetes Skript nicht gefunden.');
      asset.source = html.replace(match[0], '').replace('</body>', () => `<script>${match[1]}</script>\n</body>`);
    },
  };
}

// Quellen liegen in src/. Der Build schreibt eine einzige, eigenständige
// index.html (JS und CSS inline) in den Projektstamm.
export default defineConfig({
  root: 'src',
  plugins: [react(), tailwindcss(), viteSingleFile(), classicInlineScript()],
  build: {
    outDir: '..',
    emptyOutDir: false,
    rollupOptions: { output: { format: 'iife' } },
  },
});
