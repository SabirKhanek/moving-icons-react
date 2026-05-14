import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig(({ command }) => {
  // `vite demo` → dev server
  if (command === 'serve') {
    return {
      plugins: [react()],
      root: resolve(__dirname, 'demo'),
      server: { port: 5173 },
    };
  }

  // `vite build` → tree-shakeable ESM library
  return {
    plugins: [react()],
    build: {
      outDir: 'dist',
      emptyOutDir: true,
      // Minify with esbuild (default in lib mode is false — enable explicitly)
      minify: 'esbuild',
      lib: {
        entry: resolve(__dirname, 'src/index.ts'),
        formats: ['es'],
      },
      rollupOptions: {
        external: ['react', 'react/jsx-runtime'],
        output: {
          // One file per source module → bundlers only include what's imported
          preserveModules: true,
          preserveModulesRoot: 'src',
          entryFileNames: '[name].js',
          assetFileNames: '[name][extname]',
        },
      },
      cssCodeSplit: true,
      // No source maps in the published package
      sourcemap: false,
    },
  };
});
