const path = require("path")
module.exports =[ {
    devtool: 'cheap-source-map',
    entry: path.resolve(__dirname,'../chart.js/src/chart.js'),
    mode: 'production',
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'chart.js',
        library: 'Chart',
        libraryTarget: 'umd',
    }
}]
