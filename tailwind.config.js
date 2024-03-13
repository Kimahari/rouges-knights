const { createGlobPatternsForDependencies } = require('@nx/angular/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    colors: {
      primary: '#E91E63',
      'white': '#FFFFFF',
      'secondary-text': '#757575',
      'primary-text': '#212121',
      'dark-primary': '#C2185B',
      'light-primary': '#F8BBD0',
      secondary: '#ffff00',
      'accent': '#FF4081',
      gray: {
        100: "#f7f7f7",
        200: "#e5e5e5",
      }
    },
    extend: {}
  },
  darkMode: "class",
  plugins: [
    require('@tailwindcss/forms'),
    //require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
    //require('tailwindcss-children'),
  ],
};
