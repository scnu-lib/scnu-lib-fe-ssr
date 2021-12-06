module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'reading-banner': "url('/public/images/reading.png')"
      })
    },
  },
  variants: {},
  plugins: [],
}
