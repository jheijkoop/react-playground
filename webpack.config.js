module.exports = {
  entry: './app.tsx',
  output: {
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js']
  },
  module: {
    loaders: [
      { test: /\.tsx$/, loader: 'ts-loader' }
    ]
  },
  ts: {
    compilerOptions: {
      jsx: "react"
    }
  }
}
