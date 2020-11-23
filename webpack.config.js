const path = require('path');

module.exports = {
  entry: './src/app/index.js',
  output: {
    path: path.resolve(__dirname, 'src', 'js'),
    filename: 'main.js',
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
};
