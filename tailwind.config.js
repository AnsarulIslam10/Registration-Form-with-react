/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neonBlue: '#00f0ff',
        deepSpace: '#1a1a2e',
        spacePurple: '#3d3d63',
      },
      fontFamily: {
        futuristic: ['Orbitron', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
