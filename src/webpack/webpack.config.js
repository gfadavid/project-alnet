const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');

module.exports = {

    entry: './src/app.js', // Archivo que maneja la aplicación

    output: {
        path: path.resolve(__dirname, '../../docs'), // La ruta que se va a generar
        filename: 'js/bundle.js' // Nombre de archivo que va a generar
    },

    module: {
        rules: [
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    MiniCSSExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                ]
            },
            {
                test: /\.(jpg|jpeg|png|gif|svg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'static/img',
                            useRelativePath: true
                        }
                    },
                    // { 
                    //     loader: 'image-webpack-loader',
                    //     options: {
                    //       mozjpeg: {
                    //         progressive: true,
                    //       },
                    //       // optipng.enabled: false will disable optipng
                    //       optipng: {
                    //         enabled: false,
                    //       },
                    //       pngquant: {
                    //         quality: [0.65, 0.90],
                    //         speed: 4
                    //       },
                    //       gifsicle: {
                    //         interlaced: false,
                    //       },
                    //       // the webp option will enable WEBP
                    //       webp: {
                    //         quality: 75
                    //       }
                    //     }
                    // },
                ]
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            minify: false
        }),

        new MiniCSSExtractPlugin({
            filename: 'css/[name].css'
        })
    ]

};