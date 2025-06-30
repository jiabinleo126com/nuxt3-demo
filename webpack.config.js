// import { resolve, join } from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { fileURLToPath } from 'url';
import path from 'path';
import CssMinimizerPlugin from "css-minimizer-webpack-plugin";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const { resolve, join } = path;

import webpack from "webpack";
// import { HotModuleReplacementPlugin } from "webpack";
const HotModuleReplacementPlugin = webpack.HotModuleReplacementPlugin;
// import MiniCssExtractPlugin, { loader as _loader } from "mini-css-extract-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
const _loader = MiniCssExtractPlugin.loader;
// import SpeedMeasurePlugin from 'speed-measure-webpack-plugin';
// const ImageWebpackLoader = require('image-webpack-loader');

// const smp = new SpeedMeasurePlugin();
// import TerserPlugin, { swcMinify } from "terser-webpack-plugin";
// import TerserPlugin from "terser-webpack-plugin";
// import CopyPlugin from "copy-webpack-plugin";
const isdev = process.env.NODE_ENV == "development";
// import { htmlTemplate, entry } from './webpack.pages.js';
// const defaultTemplate = process.env.npm_package_config_project;
// if (isdev) {
//   require(`./serves/ajax`)
// }
const commonPostcssLoader = {
  loader: 'postcss-loader',
  options: {
    postcssOptions: {
      plugins: [
        'postcss-preset-env'
      ]
    }
  }
};

const moduleConfig = {
  entry: {
    index: "./product-page/index.ts",
  },
  output: {
    filename: "js/[name].js?t=[contenthash:8]",
    path: resolve(__dirname, "product-dist"),
    clean: true
  },
  cache: {
    type: "filesystem",
  },
  module: {
    rules: [{
      test: /\.(less)$/i,
      use: [isdev ? "style-loader" : _loader, {
        loader: "css-loader",
        options: {
          modules: false
        }
      }, commonPostcssLoader, "less-loader"]
    },
    {
      test: /\.scss$/i,
      use: [isdev ? "style-loader" : _loader, {
        loader: "css-loader",
        // options: {
        //   modules: false,
        // }
      }, commonPostcssLoader, {
        loader: "sass-loader",
        // options: {
        //   sassOptions: {
        //     webpackImporter: false,
        //     fiber: false
        //   }
        // }
      }]
    },
    {
      test: /\.css$/i,
      loader: 'css-loader',
      options: {
        url: true,
      },
    },
    {
      test: /\.(png|gif|jpe?g|svg)$/i,
      type: "asset/resource",
      // use: [
      //   'file-loader',
      //   {
      //     loader: 'image-webpack-loader',
      //     options: {
      //       mozjpeg: {
      //         progressive: true,
      //         quality: 75 // 调整JPEG图片的质量
      //       },
      //       optipng: {
      //         enabled: false // 是否启用optipng压缩
      //       },
      //       pngquant: {
      //         quality: [0.65, 0.90], // PNG图片的质量范围
      //         speed: 4
      //       },
      //       gifsicle: {
      //         interlaced: false // 是否启用对GIF图片的交错处理
      //       },
      //       webp: {
      //         quality: 75 // 转换为webp格式的图片质量
      //       }
      //     }
      //   }
      // ],
      generator: {
        filename: 'images/[contenthash:8][ext]'
      }
    },
    {
      test: /\.html$/,
      loader: "html-loader",
      options: {
        esModule: true
      }
    },
    {
      test: /\.ejs$/,
      loader: "ejs-loader",
      options: {
        esModule: false,
        attrs: [':data-src', ":src"]
      }
    },
    {
      test: /\.tsx?$/,
      loader: "ts-loader"
    },
    {
      test: /\.js$/,
      exclude: /node_modules/,
      // include: resolve(__dirname, "product-page"),
      use: {
        loader: 'babel-loader',
        options: {
          sourceMap: "inline",
          retainLines: true,
          presets: [
            ['@babel/preset-env', {
              useBuiltIns: 'usage',
              corejs: {
                version: 3
              },
              targets: {
                chrome: '60',
                firefox: '60',
                ie: '9',
                safari: '10',
                edge: '17',
                node: 'current'
              }
            }]
          ],
          plugins: [
            ["@babel/plugin-proposal-decorators", { "legacy": true }],
            ["@babel/plugin-proposal-private-property-in-object", { "loose": true }],
            ["@babel/plugin-proposal-private-methods", { "loose": true }],
            ["@babel/plugin-proposal-class-properties", { "loose": true }],
            ["@babel/transform-for-of"]
          ],
          cacheDirectory: false
        }
      }
    }]
  },
  optimization: {
    minimize: true,
    minimizer: [
      // new TerserPlugin({
      //   // minify: swcMinify,
      //   terserOptions: {},
      // }),
      new CssMinimizerPlugin(),
    ],
    concatenateModules: true,
    splitChunks: {
      chunks: "all",
      minSize: 20000,
      minRemainingSize: 0,
      minChunks: 1,
      maxAsyncRequests: 30,
      maxInitialRequests: 30,
      enforceSizeThreshold: 50000,
      cacheGroups: {
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          reuseExistingChunk: true,
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
      },
      cacheGroups: {
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          reuseExistingChunk: true,
        },
        default: {
          minSize: 0,
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
      }
    }
  },
  mode: process.env.NODE_ENV,
  // resolve: {
  //   alias: {
  //     '@': path.resolve(__dirname, './src'),
  //     '@images': path.resolve(__dirname, `./src/images`),
  //     '@cs': path.resolve(__dirname, `./src/components`),
  //     '@data': path.resolve(__dirname, `./src/data`),
  //     '@plugins': path.resolve(__dirname, `./src/plugins`),
  //     '@common': path.resolve(__dirname, `./src/common`)
  //   }
  // },
  performance: {
    maxEntrypointSize: 10000000,
    maxAssetSize: 30000000
  },
  devServer: {
    watchFiles: ['src/**/*'],
    static: {
      directory: join(__dirname, "dist"),
    },
    compress: true,
    port: 80,
    hot: true,
    open: true,
    allowedHosts: 'all',
    bonjour: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
      'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,PUT,DELETE,FETCH',
      'Access-Control-Allow-Headers': 'DNT,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Range,Authorization,token,source'
    },
    client: {
      progress: true,
    },
    historyApiFallback: {
      rewrites: [
        { from: /.html$/, to: '' }
      ]
    },
    proxy: {
      '/index.php': {
        target: 'https://project-iprj6690df5f8b4f9220a3b89e71-1235.preview.node01.inscode.run/',
        changeOrigin: true,
        pathRewrite: {
          "^/index.php": ""
        }
      }
    }
  },
  watchOptions: {
    poll: 1000,
    ignored: /node_modules/
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/[name].css?t=[contenthash:8]"
    }),
    new HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: `./product-page/index.ejs`,
      hash: false,
      minify: {
        caseSensitive: true,
        collapseBooleanAttributes: false,
        collapseInlineTagWhitespace: true,
        collapseWhitespace: true,
        conservativeCollapse: false,
        keepClosingSlash: true,
        customAttrAssign: [],
        customAttrSurround: [],
        customEventAttributes: [],
        removeComments: true,
        removeRedundantAttributes: false,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true,
        continueOnParseError: true,
        minifyJS: true,
        minifyCSS: true,
        preserveLineBreaks: false,
        sortAttributes: true,
        sortClassName: true,
        trimCustomFragments: true
      },
      inject: "body",
      filename: "index.html",
      xhtml: true,
      showErrors: true,
      chunks: "index"
    })
    // new webpack.ProvidePlugin({
    //     $: "jquery",
    //     "jQuery": "jquery",
    //     "window.jQuery": "jquery"
    // })
  ],
  target: "web"
}
// moduleConfig.plugins.push(...htmlTemplate);
// if (isdev) {
//   module.exports = moduleConfig
// } else {
// module.exports = moduleConfig
export { moduleConfig as default };
// }
// if (!defaultTemplate) {
// moduleConfig.plugins.push(new CopyPlugin({
// patterns: [
// {
//   from: path.resolve(__dirname, `./src/plugins/s2t.js`),
//   to: path.resolve(__dirname, `./dist/js`)
// },
// {
//     from: path.resolve(__dirname, `./src/plugins/jquery-3.6.0.min.js`),
//     to: path.resolve(__dirname, `./dist/js`)
// },
// {
//     from: path.resolve(__dirname, `./src/plugins/swiper.min.js`),
//     to: path.resolve(__dirname, `./dist/js`)
// },
// {
//     from: path.resolve(__dirname, `./src/plugins/swiper.min.css`),
//     to: path.resolve(__dirname, `./dist/css`)
// },
// {
//     from: path.resolve(__dirname, `./src/plugins/city.js`),
//     to: path.resolve(__dirname, `./dist/js`)
// },
// {
//     from: path.resolve(__dirname, `./src/plugins/tinymce`),
//     to: path.resolve(__dirname, `./dist/js`)
// },
// {
//     from: path.resolve(__dirname, `./src/skin`),
//     to: path.resolve(__dirname, `./dist/skin/`)
// }
//     ]
//   }))
// }
