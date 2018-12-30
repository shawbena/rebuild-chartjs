'use strict';
var Chart = require('./chart')
function PolarArea(context, config) {
	config.type = 'polarArea';

	return new Chart(context, config);
}

export default PolarArea
