/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      IBM: ['IBM Plex Sans Condensed', 'sans-serif'],
      Sora: ['Sora', 'sans-serif'],
    },
    extend: {
      colors: {
        pri: '#1976D2',
        dark: '#414141',
      },
      screens: {
        '1300px': '1300px',
        '1100px': '1110px',
        '1000px': '1050px',
        '800px': '800px',
        '400px': '400px',
      },
    },
  },
  plugins: [],
};
