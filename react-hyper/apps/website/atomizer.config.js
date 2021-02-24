const { resolve } = require('path');

module.exports = {
  cssDest: resolve(__dirname, 'src/styles.css'),
  options: {
    namespace: '#atomic',
  },
};
