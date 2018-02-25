const path = require('path');

module.exports = {
    entry: './app/app.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: 'dist'
    },
    devServer: {
        noInfo: true
    }
}   