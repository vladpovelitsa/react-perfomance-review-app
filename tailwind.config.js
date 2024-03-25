/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'brand-main': '#E5F4E3',
        'brand-secondary': '#605856',
        'brand-accent': '#1C6E8C',
        'brand-strong': '#274156',
        white: '#fff',
      },
    },
    fontFamily: {
      'playfair-display': ['Playfair Display', 'sans-serif'],
      montserrat: ['Montserrat', 'serif'],
    },
  },
  plugins: [],
};
