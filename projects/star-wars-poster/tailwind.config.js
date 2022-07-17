/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/index.css',
    './src/App.tsx',
    './src/App.css',
    './src/components/Poster.tsx',
    './src/components/Snippet.tsx',
    './src/components/StarWarsLogo.tsx',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'space': 'url(assets/imgs/stars.jpg)'
      },
      keyframes: {
        posterAnimation: {
          'from': { backgroundPosition: '0% 0' },
          'to': { backgroundPosition: '100% 0' }
        },
        spaceAnimation: {
          'from': { backgroundSize: '30vmin' },
          'to': { backgroundSize: '100vmax' },
        }
      },
      fontSize: {
        'snippet': 'min(1.8vmin, 1.4rem)'
      },
      animation: {
        posterAnimation: 'posterAnimation 80s linear infinite alternate',
        posterAnimationReverse: 'posterAnimation 80s linear infinite alternate-reverse',
        spaceAnimation: 'spaceAnimation 5000s ease-out infinite alternate'
      },
      aspectRatio: {
        'poster': '2 / 8'
      }
    },
  },
  plugins: [],
}
