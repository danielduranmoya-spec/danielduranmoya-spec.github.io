/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Palette drawn from the hero scene: shaded meadow, engraving ink, sage paper, sky and daisies.
        forest: '#18231c',
        ink: '#2b3a30',
        'ink-soft': '#3d4a41',
        muted: '#6b746c',
        paper: '#ebeee7',
        sage: '#adc4ae',
        meadow: '#5b875c',
        'meadow-deep': '#3f6b46',
        sky: '#3b8fd9',
        'sky-pale': '#bcd8ee',
        sun: '#f2c94c',
      },
      fontFamily: {
        kanit: ['Kanit', 'sans-serif'],
        serif: ['"Fraunces Variable"', 'Georgia', '"Times New Roman"', 'serif'],
        manrope: ['Manrope', 'sans-serif'],
        marck: ['"Marck Script"', 'cursive'],
      },
    },
  },
  plugins: [],
};
