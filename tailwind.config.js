module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#7645D9',
        secondary: '#58EFFF',
        positive: '#E858FF',
        background: '#EDF5FF',
        gray: {
          DEFAULT: '#9AA3A3',
          hover: '#EFF4F5',
          border: '#E2E8F0',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
