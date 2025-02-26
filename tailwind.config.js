/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        background: '#1c1917',
        card: '#292524',
        text: {
          primary: '#e7e5e4',
          secondary: '#d6d3d1',
        },
        accent: {
          primary: '#9333ea', // Updated to match the purple gradient
          secondary: '#ec4899', // Updated to match the pink gradient
        },
        purple: {
          400: '#c084fc', // Added to match the text gradient
          500: '#a855f7', // Added for the icon background
          900: '#581c87', // Added for the background gradient
        },
        pink: {
          600: '#db2777', // Added for the text and background gradients
        },
        indigo: {
          900: '#312e81', // Added for the background gradient
        },
        gray: {
          300: '#d1d5db', // Added for potential use
          400: '#9ca3af', // Added for the arrow icon
          800: '#1f2937', // Added for card background
          900: '#111827', // Added for the background gradient
        },
        code: {
          background: '#332e2a',
          border: '#2b2623',
        },
        footer: '#4b5563',
      },
    },
  },
  plugins: [],
};