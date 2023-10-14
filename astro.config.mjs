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
    favicon: "./favicon.png",
    // logo: {
    //   src: "./src/assets/favicon.png",
    //   // replacesTitle: true,
    // },

    social: {
      github: "https://github.com/rahuldesar"
    },
    sidebar: [{
      label: "Intro",
      link: "/cheatsheet"
    }, {
      label: "Linux",
      // collapsed: true,
      autogenerate: {
        directory: "linux"
      }
    },
    {
      label: "Programming Tools",
      // collapsed: true,
      autogenerate: {
        directory: "programming_tools"
      }
    }, {
      label: "Cheatsheet",
      // collapsed: true,
      autogenerate: {
        directory: "reference"
      }
    }, {
      label: "Cheatsheet",
      collapsed: true,
      autogenerate: {
        directory: "reference"
      }
    }, {
      label: "Cheatsheet",
      collapsed: true,
      autogenerate: {
        directory: "reference"
      }
    }, {
      label: "Helper",
      link: "/guides/example/"
    },]
  }), tailwind(), react()]
});
