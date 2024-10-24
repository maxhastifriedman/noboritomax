const path = require('path');

module.exports = {
  entry: './src/index.ts',  // Point to your TypeScript entry file
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.ts', '.js'],  // Add '.ts' to the list of file extensions Webpack resolves
  },
  module: {
    rules: [
      {
        test: /\.ts$/,            // Test for all .ts files
        use: 'ts-loader',          // Use ts-loader to transpile TypeScript
        exclude: /node_modules/,   // Exclude node_modules from being processed
      },
    ],
  },
  mode: 'production',  // or 'development'
};
