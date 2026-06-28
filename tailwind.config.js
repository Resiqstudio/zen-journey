/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0f766e',
        accent: '#34d399',
        surface: '#f8fafc'
      },
      boxShadow: {
        soft: '0 12px 35px rgba(15, 23, 42, 0.08)'
      }
    }
  },
  plugins: []
};
