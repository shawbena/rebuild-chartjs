'use strict';
var Chart = require('./chart')
function Line(context, config) {
	config.type = 'line';

	return new Chart(context, config);
}

export default Line