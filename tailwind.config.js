// tailwind.config.js
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      maxWidth: {
        'sameastitle': '26.5rem', //nice number lol
        '29.5' : '29.5 rem',
      },
      minWidth: {
        '420': '26.5rem',
        '29.5' : '29.5rem',
      },
    },
  },
  plugins: [],
};


