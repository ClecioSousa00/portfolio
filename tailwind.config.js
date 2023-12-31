/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'radial-gradient':
          'radial-gradient(50% 50.00% at 50% 50.00%, rgba(61, 134, 205, 0.42) 0%, rgba(21, 21, 21, 0.00) 100%)',
        'border-gradient':
          'linear-gradient(90deg, rgba(0,210,223,1) 0%, rgba(101,24,180,1) 100%)',
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        alt: ['var(--font-ibm)'],
      },
      colors: {
        primary: '#151515',
        primaryDark: '#121212',
        secondary: '#C4C4C4',
        secondaryLigth: '#FFFFFF',
        blueLinear: '#00D2DF',
        violetAlt: '#4118B4',
      },
      boxShadow: {
        'blue-shadow': '0px 1px 30px 0px rgba(0,210,223,0.75)',
      },
    },
  },
  plugins: [],
}
