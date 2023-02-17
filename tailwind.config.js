/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        Hack: ['Hack', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        kanagawa: {
          fujiWhite: '#DCD7BA',
          oldWhite: '#C8C093',
          sumiInk0: '#16161D',
          sumiInk1: '#1F1F28',
          sumiInk3: '#363646',
          waveBlue2: '#2D4F67',
          crystalBlue: '#7E9CD8',
          autumnRed: '#C34043',
        },
      },
    },
  },
  plugins: [],
};
