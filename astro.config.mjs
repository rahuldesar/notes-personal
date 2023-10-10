import { defineConfig, passthroughImageService } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://notes.rahuldeshar.com.np",
  image: {
    service: passthroughImageService()
  },
  integrations: [starlight({
    title: "Cheatsheet",
    customCss: [
    // Path to your Tailwind base styles:
    "./src/tailwind.css"],
    favicon: "./public/favicon.png",
    // logo: {
    //   src: "./src/assets/favicon.png",
    //   // replacesTitle: true,
    // },

    social: {
      github: "https://github.com/rahuldesar"
    },
    sidebar: [{
      label: "Guides",
      collapsed: true,
      items: [{
        label: "Example Guide",
        link: "/guides/example/"
      }]
    }, {
      label: "Reference",
      collapsed: true,
      autogenerate: {
        directory: "reference"
      }
    }]
  }), tailwind(), react()]
});