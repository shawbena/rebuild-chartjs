'use strict';

var Chart = require('./chart')
function Bar(context, config) {
	config.type = 'bar';

	return new Chart(context, config);
}

export default Bar
