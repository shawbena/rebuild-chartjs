const path = require("path")
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const mode = "development"
const devtool = mode !== "production" ? 'cheap-module-source-map' : false;
module.exports =[ {
	devtool,
    mode,
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: `Chart.bundle.${mode==="production" ? "min." : ""}js`,
        library: 'Chart',
		libraryTarget: 'umd',
		libraryExport: 'default',
	},
	plugins: [
		// new BundleAnalyzerPlugin()
	  ]
},{
	devtool,
    mode,
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: `Chart.${mode==="production" ? "min." : ""}js`,
        library: 'Chart',
		libraryTarget: 'umd',
		// auxiliaryComment: "Chart.js",
		libraryExport: 'default',
	},
	externals: {
		moment: 'moment'
	}
}].map(item => {
	item.entry = path.resolve(__dirname,'src/index.js')
	return item
})
