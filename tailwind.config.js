module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'serif': ['Manrope', 'sans-serif']
      }
    }
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('child', '& > *');
      addVariant('child-hover', '& > *:hover');
      addVariant('hoveract', ['&:hover', '&:active'])
  }, 
  function ({ addBase, theme }) {
    addBase({
      h1: { fontSize: theme('fontSize.6xl') },
    });
  },
  ],
}
