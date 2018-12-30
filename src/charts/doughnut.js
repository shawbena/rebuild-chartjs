'use strict';

var Chart = require('./chart')

function Doughnut(context, config) {
	config.type = 'doughnut';

	return new Chart(context, config);
}

export default Doughnut