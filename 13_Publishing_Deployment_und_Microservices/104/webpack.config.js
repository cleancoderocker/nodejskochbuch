const path = require('path');
const nodeExternals = require('webpack-node-externals');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  mode: 'production',
  target: 'node',
  entry: {
    app: ['./start.js']
  },
  output: {
    path: path.resolve(__dirname),
    filename: 'start.min.js'
  },
  externals: [
    nodeExternals({
      whitelist: [/^dl-/]
    })
  ],
  optimization: {
    minimizer: true
  }
};
