const starlightPlugin = require("@astrojs/starlight-tailwind");

// Generated color palettes
const accent = {
  200: "#a6e3a1",
  600: "#6c63ff",
  900: "#cba6f7",
  950: "#303446",
};
const gray = {
  100: "#f5f6f8",
  200: "#eceef2",
  300: "#c0c2c7",
  400: "#888b96",
  500: "#545861",
  700: "#353841",
  800: "#181825", // Background sidebar - nav too
  900: "#1E1E2E", // BG
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: { accent, gray },
    },
  },
  plugins: [starlightPlugin()],
};

// /* Dark mode colors. */
// :root {
// 	--sl-color-accent-low: #361d00;
// 	--sl-color-accent: #965a00;
// 	--sl-color-accent-high: #f1bd8a;
// 	--sl-color-white: #ffffff;
// 	--sl-color-gray-1: #eeedee;
// 	--sl-color-gray-2: #c2c2c2;
// 	--sl-color-gray-3: #8b8b8c;
// 	--sl-color-gray-4: #585859;
// 	--sl-color-gray-5: #383839;
// 	--sl-color-gray-6: #272727;
// 	--sl-color-black: #181818;
// }
// /* Light mode colors. */
// :root[data-theme='light'] {
// 	--sl-color-accent-low: #f6cfa9;
// 	--sl-color-accent: #995b00;
// 	--sl-color-accent-high: #4a2a00;
// 	--sl-color-white: #181818;
// 	--sl-color-gray-1: #272727;
// 	--sl-color-gray-2: #383839;
// 	--sl-color-gray-3: #585859;
// 	--sl-color-gray-4: #8b8b8c;
// 	--sl-color-gray-5: #c2c2c2;
// 	--sl-color-gray-6: #eeedee;
// 	--sl-color-gray-7: #f6f6f6;
// 	--sl-color-black: #ffffff;
// }
