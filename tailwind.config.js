/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'warm-pink': '#FB7474',
        'navy-blue': '#16538E'
      }
    }
  },
  plugins: []
};
