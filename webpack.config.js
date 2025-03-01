const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { hasPostCSSConfig } = require("@wordpress/scripts/utils");
const postcssPlugins = require('@wordpress/postcss-plugins-preset');
const isProduction = process.env.NODE_ENV === 'production';
const defaultConfig = require('@wordpress/scripts/config/webpack.config');

const cssLoaders = [
    {
        loader: MiniCssExtractPlugin.loader,
        options: {
            publicPath: 'build/',
        }
    },
    {
        loader: require.resolve('css-loader'),
        options: {
            sourceMap: !isProduction,
            modules: {
                auto: true,
            },
        },
    },
    {
        loader: require.resolve('postcss-loader'),
        options: {
            // Provide a fallback configuration if there's not
            // one explicitly available in the project.
            ...(!hasPostCSSConfig() && {
                postcssOptions: {
                    ident: 'postcss',
                    plugins: postcssPlugins,
                },
            }),
        },
    },
    {
        loader: 'sass-loader',
        options: {
            sourceMap: !isProduction,
            sassOptions: { includePaths: ['node_modules'] },
            implementation: require('sass'),
        },
    },
];

const mode = isProduction ? 'production' : 'development';
module.exports = {
    mode,
    ...defaultConfig,
    entry: {
        ...defaultConfig.entry,
        script: './src/index.js',
        block: './blocks/src/index.js',
        app: './src/scss/main.scss'
    },

    mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
    // output: [
    //     // modern bundles:

    //   ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: "webpack-import-glob-loader",
            },

            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: [
                    require.resolve('thread-loader'),
                    {
                        loader: require.resolve('babel-loader'),
                        options: {
                            cacheDirectory:
                                process.env.BABEL_CACHE_DIRECTORY || true,
                            presets: [
                                '@wordpress/babel-preset-default',
                                '@babel/preset-react'
                            ]
                        },
                    },
                ],
            },
            {
                test: /\.(js|jsx)$/,
                include(file) {
                    let dir = file.match(/^.*[/\\]node_modules[/\\](@.*?[/\\])?.*?[/\\]/);
                    try {
                        return dir && !!require(dir[0] + 'package.json').exports;
                    } catch (e) { }
                },
                // exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        babelrc: false,
                        configFile: false,
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                    },
                },
            },
            {
                test: /\.(c|sc|sa)ss$/,
                exclude: /node_modules/, // Exclude SCSS from node_modules
                use: [...cssLoaders],
            },
            {
                test: /\.(bmp|png|jpe?g|gif|svg)$/i,
                type: 'asset/resource',
            }
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css', // Use [name] placeholder for dynamic filenames
        })
    ],
    resolve: {
        extensions: ['', '.js', '.jsx'], // Allow importing files without specifying the extension
    },

    externals: {
        react: 'React',
        window: 'window',
        'react-dom': 'ReactDOM',
        '@wordpress/blocks': ['wp', 'blocks'],
        '@wordpress/block-editor': ['wp', 'blockEditor'],
        '@wordpress/components': ['wp', 'components']
    }
};
