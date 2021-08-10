module.exports = {
    moduleNameMapper: {
        "\\.(gif|ttf|eot|svg)$": "<rootDir>/__mocks__/fileMock.js",
        "\\.(scss|less)$": "identity-obj-proxy"
    }
};