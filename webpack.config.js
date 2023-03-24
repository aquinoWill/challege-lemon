const path = require('path')

module.exports = {
  resolve: {
    extensions: ['ts', 'tsx', 'js', 'jsx'],
    alias: {
      'assets': path.resolve(__dirname, 'src/assets'),
      'pages': path.resolve(__dirname, 'src/pages'),
      'routes': path.resolve(__dirname, 'src/routes'),
      'providers': path.resolve(__dirname, 'src/providers'),
      'components': path.resolve(__dirname, 'src/components')
    }
  }
}
