import { defineConfig, passthroughImageService } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwind from "@astrojs/tailwind";
import partytown from "@astrojs/partytown";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://notes.rahuldeshar.com.np",
  image: {
    service: passthroughImageService(),
  },
  integrations: [
    starlight({
      title: "Cheatsheet",
      tableOfContents: { minHeadingLevel: 2, maxHeadingLevel: 4 },
      customCss: [
        // Path to your Tailwind base styles:
        "./src/tailwind.css",
      ],
      favicon: "./favicon.png",
      head: [
        // Example: add Fathom analytics script tag.
        {
          tag: "script",
          attrs: {
            type: "text/partytown",
            src: "https://www.googletagmanager.com/gtag/js?id=G-ZLTT061SS3",
            async: true,
          },
        },
        {
          tag: "script",
          attrs:{
            type: "text/partytown",
          },
          content: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-ZLTT061SS3');`,
        },
      ],

      // logo: {
      //   src: "./src/assets/favicon.png",
      //   // replacesTitle: true,
      // },

      social: {
        github: "https://github.com/rahuldesar",
      },
      sidebar: [
        {
          label: "Intro",
          link: "/cheatsheet",
        },
        {
          label: "Linux",
          // collapsed: true,
          autogenerate: {
            directory: "linux",
          },
        },
        {
          label: "Database",
          // collapsed: true,
          autogenerate: {
            directory: "database",
          },
        },
        {
          label: "Programming Tools",
          // collapsed: true,
          autogenerate: {
            directory: "programming_tools",
          },
        },
        {
          label: "Cheatsheet",
          collapsed: true,
          autogenerate: {
            directory: "reference",
          },
        },
        {
          label: "Helper",
          link: "/guides/example/",
          badge: "tip",
        },
      ],
    }),
    tailwind(),
    react(),
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
    }),
  ],
});
