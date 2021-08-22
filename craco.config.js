const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components/'),
      '@containers': path.resolve(__dirname, 'src/containers/'),
      '@redux': path.resolve(__dirname, 'src/redux/'),
      '@router': path.resolve(__dirname, 'src/router/'),
    },
  },
};
