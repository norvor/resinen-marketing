/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // The South Park Palette
        'sp-cyan': '#40E0D0',   // Cartman's Hat
        'sp-yellow': '#F9F447', // Cartman's Pom Pom
        'sp-red': '#E84A43',    // Cartman's Coat
        'sp-green': '#5BC236',  // Kyle's Hat
        'sp-orange': '#F3752B', // Kenny's Parka
        'sp-brown': '#7B4C29',  // Stan's Coat
        'sp-blue': '#2D4F8E',   // Stan's Hat
        'sp-paper': '#F5F5F5',  // Background Texture
      },
      boxShadow: {
        // The "Cutout" Hard Shadow
        'hard': '4px 4px 0px 0px rgba(0,0,0,1)',
        'hard-lg': '8px 8px 0px 0px rgba(0,0,0,1)',
      },
      fontFamily: {
        // Default to a chunky sans if you don't have a custom font
        sans: ['Verdana', 'sans-serif'],
      }
    },
  },
  plugins: [],
}