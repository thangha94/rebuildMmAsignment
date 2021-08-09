const { merge } = require('webpack-merge');
const CopyPlugin = require("copy-webpack-plugin");

const common = require('./webpack.common');

const config = {
    mode: 'production',
    plugins: [
        new CopyPlugin({
            patterns: [
                {
                    from: "public", to: "public", globOptions: {
                        dot: true,
                        gitignore: true,
                        ignore: ["**/index.html"],
                    },
                },

            ],
        }),
    ]
};

module.exports = merge(config, common)