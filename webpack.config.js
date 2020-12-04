const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    resolve: {
        modules: ["src", "node_modules"],
        extensions: [".ts", ".tsx", ".js", ".css", ".less"],
        alias: {
            react: path.resolve(__dirname, './node_modules/react'),
            'react-dom': path.resolve(__dirname, './node_modules/react-dom'),
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "ts-loader"
                    }
                ]
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ],
            },
            {
                test: /\.css$/,
                use: ['css-loader']
            },
            {
                test: /\.mjs$/,
                include: /node_modules/,
                type: "javascript/auto",

            },
        ]
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: [
            path.join(__dirname, 'public'),
        ],
        historyApiFallback: true,
        port: 3000
    }
    ,
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'public/index.html')
        })
    ]
};
