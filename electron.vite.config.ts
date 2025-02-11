import { defineConfig } from 'electron-vite'
import { resolve } from 'path'

export default defineConfig({
  main: {
    root: ".",
    build: {
      rollupOptions: {
        input: {
          index: resolve(__dirname, "desktop/main/main.ts")
        },
        output: {
          format: "es"
        }
      }
    }
  },
  preload: {
    root: ".",
    build: {
      outDir: "out/preload",
      rollupOptions: {
        input: {
          index: resolve(__dirname, "desktop/preload/preload.ts")
        },
        output: {
          dir: resolve(__dirname, "out/preload"),
          entryFileNames: "index.mjs",
          format: "es"
        }
      }
    }
  },
  renderer: {
    root: ".",
    build: {
      rollupOptions: {
        input: {
          index: resolve(__dirname, "index.html")
        }
      }
    }
  }
});
