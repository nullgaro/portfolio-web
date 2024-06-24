import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://nullgaro.com",
  integrations: [tailwind(), sitemap()],
  i18n: {
    defaultLocale: "es",
    locales: ["es", "en"]
  }
});