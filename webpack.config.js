const path = require('path');
const SRC_DIR = path.join(__dirname, '/client/src');
const DIST_DIR = path.join(__dirname, '/client/dist');

module.exports = {
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    filename: 'bundle.js',
    path: DIST_DIR
  },
  module : {
    rules : [
      {
        test : /\.jsx?/,
        include : SRC_DIR,
        loaders : 'babel-loader',
        // options: {
        //   presets: ['react', 'env']
        // }
      }
    ]
  }
};


// module.exports = {
//   entry: __dirname + '/client/src/index.jsx',
//   output: {
//     filename: 'bundle.js',
//     path: __dirname + '/client/dist'
//   },
//   module: {
//     rules: [
//       {
//         test: /\.jsx$/,
//         exclude: /node_modules/,
//         use: {
//           loader: 'babel-loader'
//         }
//       }
//     ]
//   }
// };