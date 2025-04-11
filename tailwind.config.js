/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./*.html",
    "./src/**/*.{js,css}"
  ],
  theme: {
    extend: {
      colors: {
        darkbg: '#0a192f',
        lightbg: '#f8f9fa',
        accent: '#0d6efd',
        'dark-accent': '#64ffda',
        lightText: '#8892b0',
        darkText: '#212529',
        heading: '#0a192f',
        'dark-heading': '#ccd6f6',
        secondary: '#6c757d',
        'dark-secondary': '#8892b0',
        card: '#ffffff',
        'dark-card': '#112240',
        'light-border': '#dee2e6',
        'dark-border': '#303f5b',
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', 'sans-serif'],
        mono: ['SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', 'monospace'],
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}