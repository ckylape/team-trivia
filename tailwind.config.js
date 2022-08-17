const colors = {
  white: "#ffffff",
  black: "#000000",
  red: "#ff5555",
  green: "#50fa7b",
  blue: "#6272a4",
  cyan: "#8be9fd",
  yellow: "#f1fa8c",
  purple: "#bd93f9",
  pink: "#ff79c6",
  orange: "#ffb86c",
  light: "#f8f8f2",
  dark: "#282a36",
  darker: "#282a36",
};

module.exports = {
  content: ["./public/index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    colors: colors,
    extend: {},
  },
  plugins: [],
};
