// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

import cloudflare from "@astrojs/cloudflare";

import icon from "astro-icon";


// https://astro.build/config
export default defineConfig({
  site: "https://echoingmarfa.life",

  integrations: [mdx(), sitemap(), icon({ 
    include: {
      // Include needed Icons
      'simple-icons': ['instagram', 'tiktok']
    }
  })],

  adapter: cloudflare({
    platformProxy: {
      enabled: true,
    },
  }),
});