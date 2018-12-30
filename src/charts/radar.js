'use strict';
var Chart = require('./chart')
function Radar(context, config) {
	config.type = 'radar';

	return new Chart(context, config);
}

export default Radar