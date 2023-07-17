/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        accentBlack: '#02040aff',
        backgroundBlack: '#0d1116ff',
        detailGrey: '#30363dff',
        error: '#dd1001ff',
        orange: '#f57f08ff',
        red: '#e53930ff',
        green: '#2da042ff',
      }
    },
  },
  plugins: [],
}
