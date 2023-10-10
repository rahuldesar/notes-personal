import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  site: "https://notes.rahuldeshar.com.np",
  base: "/",
  integrations: [
    starlight({
      title: "My Docs",
      social: {
        github: "https://github.com/rahuldesar",
      },
      sidebar: [
        {
          label: "Guides",
          items: [{ label: "Example Guide", link: "/guides/example/" }],
        },
        {
          label: "Reference",
          autogenerate: { directory: "reference" },
        },
      ],
    }),
  ],
});
