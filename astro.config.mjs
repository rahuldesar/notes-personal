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
          attrs: {
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
        // {
        //   label: "Intro",
        //   link: "/cheatsheet",
        // },
        {
          label: "Linux",
          // collapsed: true,
          autogenerate: {
            directory: "linux",
          },
        },
        {
          label: "My Toolchain",
          // collapsed: true,
          autogenerate: {
            directory: "programming_tools",
          },
        },
        {
          label: "Effective Typescript",
          collapsed: true,
          autogenerate: {
            directory: "effective-typescript",
          },
        },
        {
          label: "Rust Notes",
          collapsed: true,
          autogenerate: {
            directory: "rust",
          },
        },
        {
          label: "Database",
          collapsed: true,
          autogenerate: {
            directory: "database",
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
          label: "Future Me",
          collapsed: true,
          autogenerate: {
            directory: "future-me",
          },
        },
        {
          label: "Helper",
          link: "/guides/example/",
          badge: "Reference",
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
