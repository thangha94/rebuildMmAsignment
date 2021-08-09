const { merge } = require('webpack-merge');
const paths = require('./webpack.path');
const common = require('./webpack.common');

const config = {
    mode: 'development',
    devServer: {
        open: true,
        hot: true,
        inline: true,
        port: 3000,
        stats: 'minimal',
        historyApiFallback: true,
    }
};

module.exports = merge(config, common)