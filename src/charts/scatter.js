'use strict';
var Chart = require('./chart')
function Scatter(context, config) {
	config.type = 'scatter';
	return new Chart(context, config);
}

export default Scatter