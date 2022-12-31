/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,tsx,ts}'],
  theme: {
    screens: {
      lg: { max: '1280px' },
      md: { max: '768px' },
      sm: { max: '480px' },
    },
    extend: {},
  },
  plugins: [],
};
