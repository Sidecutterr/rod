/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'Aldrich': ['Aldrich', 'sans-serif'],
      'Iceberg': ['Iceberg', 'cursive;']

    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      backgroundColor: theme =>({
        'brand-color': '#4c3398',
        'primary-brand-color': '#5d3ebc',
        'secondary-brand-color': '#7849f7',
        'rose-color': '#BF5454',
        'home-color': '#0794AA',
        'hero-color': '#3178FD'
      }),
      gradientColorStops: theme =>({
        'brand-color': '#4c3398',
        'primary-brand-color': '#5d3ebc',
        'secondary-brand-color': '#7849f7'
      }),
      backgroundImage: {
        'hero-pattern': "url('/img/hero-pattern.svg')",
        'footer-texture': "url('/img/footer-texture.png')",
        'navy-bluerr': "url('/src/assets/gradient_img.png')",
        'owner-color': "url('/src/assets/owners_img2.png')",
        'roadmap-color': "url('/src/assets/roadmap_img.png')",
      }
    },
  },
  plugins: [],
}
