import path from "path";
import { fileURLToPath } from "url";
import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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

export default {
    entry: {
        index: "./product-page/index.ts",
    },
    output: {
        filename: "js/[name].js?t=[contenthash:8]",
        path: path.resolve(__dirname, "product-dist"),
        clean: true
    },
    cache: {
        type: "filesystem",
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "css/[name].css?t=[contenthash:8]"
        }),
        new webpack.HotModuleReplacementPlugin(),
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
                minifyJS: false,
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
            chunks: ["index"],
        })
    ],
    mode: "development",
    module: {
        rules: [{
            test: /\.(less)$/i,
            use: [MiniCssExtractPlugin.loader, {
                loader: "css-loader",
                options: {
                    modules: false
                }
            }, commonPostcssLoader, "less-loader"]
        },
        {
            test: /\.scss$/i,
            use: [MiniCssExtractPlugin.loader, {
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
            include: path.resolve(__dirname, "src"),
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
};