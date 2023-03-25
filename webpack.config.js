const path = require('path')

module.exports = {
  resolve: {
    extensions: ['ts', 'tsx', 'js', 'jsx'],
    alias: {
      'pages': path.resolve(__dirname, 'src/pages'),
      'assets': path.resolve(__dirname, 'src/assets'),
      'hooks': path.resolve(__dirname, 'src/hooks'),
      'routes': path.resolve(__dirname, 'src/routes'),
      'providers': path.resolve(__dirname, 'src/providers'),
      'components': path.resolve(__dirname, 'src/components')
    }
  }
}
