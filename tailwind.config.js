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
          primary: '#387a5e',
          secondary: '#387a6f',
        },
        green: {
          300: '#3fb180', // Asumiendo un tono similar al texto "Vue"
        },
        teal: {
          300: '#5eead4', // Asumiendo un tono similar al texto "TailwindCSS"
        },
        code: {
          background: '#332e2a',
          border: '#2b2623',
        },
        footer: '#4b5563', // Equivalente a text-gray-600
        background: '#98a17a',
      },
    },
  },
  plugins: [],
};
