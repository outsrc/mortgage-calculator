module.exports = {
  purge: {
    mode: 'all',
    enabled: process.env.NODE_ENV === 'production',
    content: ['./src/**/*.tsx', './src/*.tsx', './src/**/*.ts', './src/*.ts']
  },
  variants: {},
  plugins: []
}
