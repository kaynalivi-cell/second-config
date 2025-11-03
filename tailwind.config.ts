import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fef6f0',
          100: '#fde9d9',
          200: '#fad0b3',
          300: '#f7b082',
          400: '#f3874f',
          500: '#ef652a',
          600: '#e04d20',
          700: '#ba391c',
          800: '#94301f',
          900: '#782a1c',
        },
        accent: {
          50: '#f0f9f4',
          100: '#dbf0e3',
          200: '#b9e1ca',
          300: '#8ccaa9',
          400: '#5bac83',
          500: '#3a9167',
          600: '#297452',
          700: '#205d42',
          800: '#1b4a36',
          900: '#173d2d',
        },
        dark: {
          50: '#f6f6f6',
          100: '#e7e7e7',
          200: '#d1d1d1',
          300: '#b0b0b0',
          400: '#888888',
          500: '#6d6d6d',
          600: '#5d5d5d',
          700: '#4f4f4f',
          800: '#454545',
          900: '#3d3d3d',
        }
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
