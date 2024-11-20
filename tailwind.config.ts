/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/react-tailwindcss-datepicker/dist/index.esm.js',
  ],
  theme: {
    extend: {
      animation: {
        'bounce-slow': 'bounce 3s infinite',
        'float': 'float 3s ease-in-out infinite',
        'wiggle': 'wiggle 1s ease-in-out infinite',
      },
      backgroundImage: {
        'confetti-pattern': "url('/patterns/confetti.svg')",
        'dots-pattern': "url('/patterns/dots.svg')",
        'waves-pattern': "url('/patterns/waves.svg')",
      },
      fontFamily: {
        bevellier: ['Bevellier', 'sans-serif'],
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        kidodo: {
          "primary": "5D63CF",
          "primary-focus": "#4d53bd",
          "primary-content": "#ffffff",

          "secondary": "#FF6B9B",
          "secondary-focus": "#FF3D7F",
          "secondary-content": "#ffffff",

          "accent": "#2ECC71",
          "accent-focus": "#27AE60",
          "accent-content": "#ffffff",

          "neutral": "#2C3E50",
          "neutral-focus": "#1a252f",
          "neutral-content": "#ffffff",

          "base-100": "#ffffff",
          "base-200": "#F8FAFC",
          "base-300": "#E2E8F0",
          "base-content": "#1e293b",

          "info": "#3498DB",
          "success": "#2ECC71",
          "warning": "#F1C40F",
          "error": "#E74C3C",


          "--rounded-box": "2rem",
          "--rounded-btn": "5rem",
          "--rounded-badge": "2rem",
          "--animation-btn": "0.3s",
          "--animation-input": ".2s",
          "--btn-text-case": "uppercase",
          "--navbar-padding": ".5rem",
          "--border-btn": "2px",

        },
      },
      {
        cyberpunk: {
          "primary": "#FF00FF",
          "primary-focus": "#D100D1",
          "primary-content": "#000000",

          "secondary": "#00FFFF",
          "secondary-focus": "#00D1D1",
          "secondary-content": "#000000",

          "accent": "#FFFF00",
          "accent-focus": "#D1D100",
          "accent-content": "#000000",

          "neutral": "#1A1A1A",
          "neutral-focus": "#000000",
          "neutral-content": "#ffffff",

          "base-100": "#000000",
          "base-200": "#0D0D0D",
          "base-300": "#1A1A1A",
          "base-content": "#00FFFF",

          "info": "#00FFFF",
          "success": "#00FF00",
          "warning": "#FFFF00",
          "error": "#FF0000",

          "--rounded-box": "0",
          "--rounded-btn": "0",
          "--rounded-badge": "0",
          "--animation-btn": "0.15s",
          "--animation-input": ".1s",
          "--btn-text-case": "uppercase",
          "--navbar-padding": ".5rem",
          "--border-btn": "2px",
        },
      },
      {
        aqua: {
          "primary": "5D63CF",
          "primary-focus": "#4d53bd",
          "primary-content": "#ffffff",

          "secondary": "#FF6B9B",
          "secondary-focus": "#FF3D7F",
          "secondary-content": "#ffffff",

          "accent": "#2ECC71",
          "accent-focus": "#27AE60",
          "accent-content": "#ffffff",

          "neutral": "#2C3E50",
          "neutral-focus": "#1a252f",
          "neutral-content": "#ffffff",

          "base-100": "#ffffff",
          "base-200": "#F8FAFC",
          "base-300": "#E2E8F0",
          "base-content": "#1e293b",

          "info": "#3498DB",
          "success": "#2ECC71",
          "warning": "#F1C40F",
          "error": "#E74C3C",

          "--rounded-box": "2rem",
          "--rounded-btn": "5rem",
          "--rounded-badge": "2rem",
          "--animation-btn": "0.3s",
          "--animation-input": ".2s",
          "--btn-text-case": "uppercase",
          "--navbar-padding": ".5rem",
          ".btn": {
            "border": "2px solid",
            "border-color": "black",
            'box-shadow': '3px 3px 0 0 var(--black)', 'background-color': '#c3c8ff',
          },
          ".card": {
            "border": "3px solid",
            "border-color": "black",
            'box-shadow': '4px 4px 0 0 black',
            'background-color': '#c3c8ff',
          },
          'input.toggle': {
            'border': '2px solid',
            'border-color': 'black',
            'box-shadow': '3px 3px 0 0 black',
            'width': '4rem',
            'height': '2.2rem',
          },
          '.themeborder1': {
            'border': '2px solid',
            'border-color': 'black',
            'box-shadow': '3px 3px 0 0 black',
          },
          '.themeborder2': {
            'border': '1px solid',
            'border-color': 'black',
            'box-shadow': '2px 2px 0 0 black',
          },

          '.calendar-day-bg-neutral': {
            'background-color': 'white',
          },
          '.calendar-day': {
            'border': '2px solid',
            'border-color': 'black',
            'border-bottom': '3px solid',
            'border-right': '3px solid',
          },
        },
      },
      "dark",
      "cupcake",
      "garden",
      "retro",
    ],
  },
};