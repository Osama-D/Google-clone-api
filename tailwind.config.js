module.exports = {
  darkMode: "class",
  content: [
    "./src/App.js",
    "./src/components/Nav.jsx",
    "./src/components/Footer.jsx",
    "./src/components/Router.jsx",
    "./src/components/Loading.jsx",
    "./src/components/Results.jsx",
    "./src/components/Search.jsx",
    "./src/components/Linkss.js",
    "./src/components/Pagination.js",
  ],
  theme: {
    extend: {},
    fontFamily: {
      body: ["Poppins"],
    },
    screens: {
      tall: { raw: "(max-width: 806px)" },
      ned: { raw: "(max-width: 1400px)" },
      // => @media (min-height: 800px) { ... }
    },
  },
  plugins: [],
};
