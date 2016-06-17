var path = require("path");

module.exports = {
  entry: {
    app: ["./app/main.js"]
  },
  output: {
    path: path.resolve(__dirname, "build"),
    publicPath: "/assets/",
    filename: "app.bundle.js"
  },
  module: {
    loaders: [
      {
        test: [/\.js$/, /\.jsx?$/],
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.scss$/,
        loaders: ["style", "css", "sass"]
      },
    ]
  }
};
