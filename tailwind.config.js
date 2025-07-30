
// tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/@heroui/theme/dist/components/(avatar|button|dropdown|ripple|spinner|menu|divider|popover).js"
],
  theme: {
    extend: {},
  },
  // darkMode: "class",
  plugins: [],
};