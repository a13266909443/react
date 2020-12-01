var path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
module.exports = {
  entry:[
    'webpack/hot/dev-server',
    'webpack-dev-server/client?http://localhost:8080',
    path.resolve(__dirname, './src/index.js'),
  ],
  output: {
      path: path.resolve(__dirname, 'build'),
      filename: 'bundle.js',
  },
  devServer: {
    contentBase: path.join(__dirname, './dist'),
    historyApiFallback: true,
    port: 8080,
    host: 'localhost'
  },
  module: {
    rules: [ //配置加载器
      {
        test: /\.js?$/, //配置要处理的文件格式，一般使用正则表达式匹配
        exclude: /node_modules/,  // 打包时忽略依赖里js
        use:[
          {
            loader:'babel-loader',//使用的加载器名称
            options: { //babel的配置参数，可以写在.babelrc文件里也可以写在这里
              presets: ["@babel/preset-env","@babel/preset-react"]
            }
          }
        ]
      },
      { 
        test: /\.(scss|css)$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: [/\.(gif|jpe?g|png)$/],
        use:[
          {
            loader: 'url-loader',
            options: {
              limit: 10000, //1w字节以下大小的图片会自动转成base64
            }
          }
        ]
      }
    ]
  },
  plugins:[
    new webpack.HotModuleReplacementPlugin(),  // 热加载
    new HtmlWebpackPlugin({ // HTML入口文件加载
      template: path.resolve(__dirname, './public/index.html'),
      filename: 'index.html',
      favicon: './public/favicon.ico'
    })
  ]
};