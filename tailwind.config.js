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
        'sameastitle': '420px', //nice number lol
      },
      minWidth: {
        '420': '420px',
      },
    },
  },
  plugins: [],
};


