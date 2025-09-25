// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

import cloudflare from "@astrojs/cloudflare";

import icon from "astro-icon";

import react from "@astrojs/react";


// https://astro.build/config
export default defineConfig({
  site: "https://example.com",

  integrations: [mdx(), sitemap(), icon({ 
    include: {
      // Include needed Icons
      'simple-icons': ['instagram', 'tiktok']
    }
  }), react()],

  adapter: cloudflare({
    platformProxy: {
      enabled: true,
    },
  }),
});