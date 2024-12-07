import { defineConfig } from "cypress";
import custom from './vite.config';

export default defineConfig({
  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
      viteConfig: custom
    },
  },

  e2e: {
    baseUrl:'http://localhost:3001',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
