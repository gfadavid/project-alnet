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
                    }
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
            // {
            //     test: /\.svg/,
            //     use: {
            //         loader: 'svg-url-loader' // No está funcionando. En teoría permite incluír SVG desde los archivos de estilos.
            //         // options: {}
            //     }   
            // }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html',
            minify: false
        }),
        new HtmlWebpackPlugin({
            filename: 'categoria-serveis.html', // Permite crear el archivo
            template: './src/categoria-serveis.html',
            minify: false
        }),
        new HtmlWebpackPlugin({
            filename: 'subcategoria-serveis.html', // Permite crear el archivo
            template: './src/subcategoria-serveis.html',
            minify: false
        }),
        new HtmlWebpackPlugin({
            filename: 'nosotros-serveis.html', // Permite crear el archivo
            template: './src/nosotros-serveis.html',
            minify: false
        }),
        new HtmlWebpackPlugin({
            filename: 'categoria-interna-serveis.html', // Permite crear el archivo
            template: './src/categoria-interna-serveis.html',
            minify: false
        }),
        new HtmlWebpackPlugin({
            filename: 'contacto-serveis.html', // Permite crear el archivo
            template: './src/contacto-serveis.html',
            minify: false
        }),
        new HtmlWebpackPlugin({
            filename: 'home-serveis.html', // Permite crear el archivo
            template: './src/home-serveis.html',
            minify: false
        }),
        new HtmlWebpackPlugin({
            filename: 'home-studio.html', // Permite crear el archivo
            template: './src/home-studio.html',
            minify: false
        }),
        new HtmlWebpackPlugin({
            filename: 'nosotros-studio.html', // Permite crear el archivo
            template: './src/nosotros-studio.html',
            minify: false
        }),
        new HtmlWebpackPlugin({
            filename: 'categoria-studio.html', // Permite crear el archivo
            template: './src/categoria-studio.html',
            minify: false
        }),
        new HtmlWebpackPlugin({
            filename: 'proyectos-studio.html', // Permite crear el archivo
            template: './src/proyectos-studio.html',
            minify: false
        }),
        new HtmlWebpackPlugin({
            filename: 'contacto-studio.html', // Permite crear el archivo
            template: './src/contacto-studio.html',
            minify: false
        }),
        new HtmlWebpackPlugin({
            filename: 'categoria-interna-studio.html', // Permite crear el archivo
            template: './src/categoria-interna-studio.html',
            minify: false
        }),
        new HtmlWebpackPlugin({
            filename: 'proyecto-interna-studio.html', // Permite crear el archivo
            template: './src/proyecto-interna-studio.html',
            minify: false
        }),
        new MiniCSSExtractPlugin({
            filename: 'css/[name].css',
        })
    ]

};