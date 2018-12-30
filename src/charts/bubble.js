'use strict';
var Chart = require('./chart')
function Bubble(context, config) {
	config.type = 'bubble';
	return new Chart(context, config);
}

export default Bubble
