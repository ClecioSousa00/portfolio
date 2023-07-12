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
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'border-gradient' : 'linear-gradient(90deg, rgba(0,210,223,1) 0%, rgba(101,24,180,1) 100%)',
      },
      fontFamily:{
        sans: ['var(--font-inter)'] ,
        alt: ['var(--font-ibm)'],
      },
      colors:{
        primary: '#151515',
        primaryDark: '#121212',
        secondary: '#C4C4C4',
        secondaryLigth: '#FFFFFF',
        blueLinear: '#00D2DF',
      }
    },
  },
  plugins: [],
}
