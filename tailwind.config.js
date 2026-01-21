/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx,html}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'float-horizontal': 'floatHorizontal 25s linear infinite',
        'typewriter': 'typewriter 3s steps(30) forwards',
        'blink': 'blink 1s step-end infinite',
      },
      keyframes: {
        floatHorizontal: {
          '0%': { transform: 'translateX(-100px)', opacity: '0' },
          '10%': { opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { transform: 'translateX(calc(100vw + 100px))', opacity: '0' },
        },
        typewriter: {
          to: { left: '100%' },
        },
        blink: {
          '50%': { borderColor: 'transparent' },
        },
      },
    },
  },
  plugins: [],
}

