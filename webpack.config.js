const path = require("path")
module.exports =[ {
	// devtool: 'cheap-module-source-map',
	devtool: false,
    entry: path.resolve(__dirname,'src/index.js'),
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'Chart.bundle.js',
        library: 'Chart',
		libraryTarget: 'umd',
		// auxiliaryComment: "Chart.js",
		libraryExport: 'default',
    }
}]
