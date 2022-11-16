/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      primary: "#545DFF",
      secondary: "#7A7A7A",
      warning: "#FFDC7D",
      success: "#36D189",
      danger: "#E94948",
    },
  },
  plugins: [require("flowbite/plugin")],
};
