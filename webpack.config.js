const path = require("path")
module.exports =[ {
    devtool: 'cheap-module-source-map',
    entry: path.resolve(__dirname,'src/chart.js'),
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'Chart.bundle.js',
        library: 'Chart',
        libraryTarget: 'umd',
    }
}]
