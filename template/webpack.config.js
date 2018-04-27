var defaultConfig = {
    externals: {},
    entry: {
        index: './src/index.js',
    },
    output: {
        filename: './dist/<%= outputFileName %>.js',
        library: '<%= libraryName %>',
        libraryTarget: 'umd',
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loader: [
                'babel-loader',
            ],
        }, ]
    },
    plugins: [],
    resolve: {
        alias: {
            'base': __dirname + '/src',
        },
    },
};

module.exports = defaultConfig;