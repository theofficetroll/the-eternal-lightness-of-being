module.exports = {
  entry: `./src/index.jsx`,
  output: {
    filename: 'bundle.js',
    path: __dirname + '/public'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: [
            ['@babel/preset-react'],
            ['@babel/preset-env'],
          ],
          plugins: [
            "@babel/plugin-proposal-class-properties"
        ]
        }
      },
      {
      test: /\.css$/,
      use: ["style-loader", "css-loader"],
      }
    ]
  }
};
