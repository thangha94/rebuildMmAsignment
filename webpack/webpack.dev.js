const { merge } = require('webpack-merge');
const paths = require('./webpack.path');
const common = require('./webpack.common');

const config = {
    mode: 'development',
    target: ['web', 'es5'],
    devtool: 'source-map',
    devServer: {
        open: true,
        hot: true,
        inline: true,
        port: 8080,
        stats: 'minimal',
        historyApiFallback: true,
    }
};

module.exports = merge(config, common)