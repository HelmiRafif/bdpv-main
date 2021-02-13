module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        active: {
          DEFAULT: "#FC8763"
        }
      },
      width: {
        'questw': '893px'
      },
      height: {
        'questh': '454px'
      },
      backgroundImage: theme => ({
        'retro': "url('../img/bg.jpg')"
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
