/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1140px",
      },
    },
    extend: {
      lineHeight:{
        "custom-lg":"108%",
        "custom-2xl":"118%",
        "custom-3xl":"120%",
        "custom-4xl":"125%",
        "custom-5xl":"150%",
        "custom-6xl":"180%",
      },

      backgroundImage:{
       'hero-bg':"url('../public/assets/hero-bg-img.webp')",
       "projects-bg":"url('../public/assets/project-bg-layer.webp')"
      },

      fontSize:{
        'custom-6xl':'56px',
        'custom-7xl':'64px',
      },

      colors:{
        "mix-white":"#3B3B3B",
        "off-white":"#FFFFFF1A",
        "gray-light":"#FFFFFF4D",
      },

      boxShadow:{
        'project-box':"0px -1px 20px 0px #FFFFFF1A",
        "project-two-box": "0px -1px 11px 0px #FFFFFF1A"        
      }

    },
  },
  plugins: [],
}