/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'nord-0':  '#0D1117',
        'nord-1':  '#2E3440',
        'nord-2':  '#3B4252',
        'nord-3':  '#434C5E',
        'nord-4':  '#4C566A',
        'nord-5':  '#D8DEE9',
        'nord-6':  '#E5E9F0',
        'nord-7':  '#ECEFF4',
        'nord-8':  '#88C0D0',
        'nord-9':  '#81A1C1',
        'nord-10': '#5E81AC',
        'nord-11': '#BF616A',
        'nord-14': '#A3BE8C',
      },
      fontFamily: {
        sans: ['Calibre', 'San Francisco', 'SF Pro Text', '-apple-system', 'system-ui', 'sans-serif'],
        mono: ['SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', 'monospace'],
      },
      screens: {
        'xs': '480px',
        'sm': '640px',
        'md': '768px',
        'lg': '1080px',
        'xl': '1280px',
      },
      keyframes: {
        fadeInUp: {
          '0%':   { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        drawStroke: {
          '0%':   { strokeDashoffset: '400' },
          '100%': { strokeDashoffset: '0' },
        },
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) forwards',
        'fade-in':    'fadeIn 0.3s ease forwards',
        'draw-stroke':'drawStroke 1.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0.3s forwards',
      },
    },
  },
  plugins: [],
};
