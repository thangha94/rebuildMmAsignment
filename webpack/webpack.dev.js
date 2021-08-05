const { merge } = require('webpack-merge');

const common = require('./webpack.common');

const config = {
    mode: 'development',
    devServer: {
        open: true,
        hot: true,
        // inline: false,
        port: 3000,
        stats: 'minimal',
        historyApiFallback: true,
    }
};

module.exports = merge(config, common)