/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "linear-gradient(to right bottom, rgba(75, 75, 75, 0.34), rgba(75, 75, 75, 0.41)), url('https://www.figma.com/file/gjzrE5bfOhNoYWNSej5Ell/image/95c55ad69a3d6d4296e5e535bf741cf1e56c1916')",
      },
      backgroundPosition: {
        'hero-position': 'center', // Change as needed
      },
      backgroundSize: {
        'hero-size': 'cover', // Or you can set this to 'contain' based on your preference
      },
      backgroundRepeat: {
        'hero-repeat': 'no-repeat', // Or set to 'repeat' or 'repeat-x' as needed
      },
    },
  },
  plugins: [],
}

