/**
 * @namespace Chart
 */
var Chart = require('./core');

Chart.helpers = require('./helpers');

// @todo dispatch these helpers into appropriated helpers/helpers.* file and write unit tests!
require('./core/helpers');

Chart.Animation = require('./core/animation');
Chart.animationService = require('./core/animations');
Chart.defaults = require('./core/defaults');
Chart.Element = require('./core/element');
Chart.elements = require('./elements');
Chart.Interaction = require('./core/interaction');
Chart.layouts = require('./core/layouts');
Chart.platform = require('./platforms');
Chart.plugins = require('./core/plugins');
Chart.Scale = require('./core/scale');
Chart.scaleService = require('./core/scaleService');
Chart.Ticks = require('./core/ticks');
Chart.Tooltip = require('./core/tooltip');

require('./core/controller')(Chart);
require('./core/datasetController')(Chart);

require('./scales/linearbase')(Chart);
require('./scales/category')
require('./scales/linear')(Chart);
require('./scales/logarithmic')(Chart);
require('./scales/radialLinear')(Chart);
require('./scales/time')(Chart);

// Controllers must be loaded after elements
// See Chart.datasetController.dataElementType
require('./controllers/bar')(Chart);
require('./controllers/bubble')(Chart);
require('./controllers/doughnut')(Chart);
require('./controllers/line')(Chart);
require('./controllers/polarArea')(Chart);
require('./controllers/radar')(Chart);
require('./controllers/scatter')(Chart);

require('./charts/bar')(Chart);
require('./charts/bubble')(Chart);
require('./charts/doughnut')(Chart);
require('./charts/line')(Chart);
require('./charts/polar-area')(Chart);
require('./charts/radar')(Chart);
require('./charts/scatter')(Chart);

// Loading built-in plugins
var plugins = require('./plugins');
for (var k in plugins) {
	if (plugins.hasOwnProperty(k)) {
		Chart.plugins.register(plugins[k]);
	}
}

Chart.platform.initialize();

module.exports = Chart;
// if (typeof window !== 'undefined') {
// 	window.Chart = Chart;
// }

// DEPRECATIONS

/**
 * Provided for backward compatibility, not available anymore
 * @namespace Chart.Legend
 * @deprecated since version 2.1.5
 * @todo remove at version 3
 * @private
 */
Chart.Legend = plugins.legend._element;

/**
 * Provided for backward compatibility, not available anymore
 * @namespace Chart.Title
 * @deprecated since version 2.1.5
 * @todo remove at version 3
 * @private
 */
Chart.Title = plugins.title._element;

/**
 * Provided for backward compatibility, use Chart.plugins instead
 * @namespace Chart.pluginService
 * @deprecated since version 2.1.5
 * @todo remove at version 3
 * @private
 */
Chart.pluginService = Chart.plugins;

/**
 * Provided for backward compatibility, inheriting from Chart.PlugingBase has no
 * effect, instead simply create/register plugins via plain JavaScript objects.
 * @interface Chart.PluginBase
 * @deprecated since version 2.5.0
 * @todo remove at version 3
 * @private
 */
Chart.PluginBase = Chart.Element.extend({});

/**
 * Provided for backward compatibility, use Chart.helpers.canvas instead.
 * @namespace Chart.canvasHelpers
 * @deprecated since version 2.6.0
 * @todo remove at version 3
 * @private
 */
Chart.canvasHelpers = Chart.helpers.canvas;

/**
 * Provided for backward compatibility, use Chart.layouts instead.
 * @namespace Chart.layoutService
 * @deprecated since version 2.8.0
 * @todo remove at version 3
 * @private
 */
Chart.layoutService = Chart.layouts;
