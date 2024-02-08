/** @type {import('tailwindcss').Config} */
export default {
  content: ['./resources/**/*.html', './index.html'],
  variants: {
    borderColor: ['responsive', 'hover', 'focus', 'focus-within'],
  },

  theme: {
    extend: {
      transformOrigin: {
        0: '0%',
      },
      zIndex: {
        '-1': '-1',
      },
      colors: {
        primary: '#A2C2E6',
        secondary: '#E577A1',
        cpink: '#E577A1',
        lightPink: '#eddfd5',
        cblue: '#A2C2E6',
        cwhite: '#F6F4F3',
        cblack: '#080406',
        cbrown: '#31241e',
        textSecondary: '#807792',
        inputBg: '#d1c8c1',
      },
    },

    fontFamily: {
      sans: ['Monsterrat', 'system-ui'],
      serif: ['ui-serif', 'Georgia'],
      mono: ['ui-monospace', 'SFMono-Regular'],
      body: ['"Monsterrat"'],
      display: ['"Wedges"'],
      BobbyJones: 'bobbyjones',
    },
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
  daisyui: {
    themes: ['cupcake'],
    base: true,
    styled: true,
    utils: true,
    logs: true,
    prefix: '',
    darkTheme: false,
  },
};
