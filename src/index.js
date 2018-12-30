/**
 * @namespace Chart
 */
// var Chart = require('./core/chart');
import Chart, { Bar, Bubble, Doughnut, Line, PolarArea, Radar, Scatter } from './charts'

Chart.Bar = Bar
Chart.Bubble = Bubble
Chart.Doughnut = Doughnut
Chart.Line = Line
Chart.PolarArea = PolarArea
Chart.Radar = Radar
Chart.Scatter = Scatter

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

require('./core/controller');
require('./core/datasetController');

require('./scales/linearbase');
require('./scales/category')
require('./scales/linear');
require('./scales/logarithmic');
require('./scales/radialLinear');
require('./scales/time');

// Controllers must be loaded after elements
// See Chart.datasetController.dataElementType
require('./controllers/bar');
require('./controllers/bubble');
require('./controllers/doughnut');
require('./controllers/line');
require('./controllers/polarArea');
require('./controllers/radar');
require('./controllers/scatter');


// var Bar = require('./charts/bar');
// var Bubble = require('./charts/bubble');
// var Doughnut = require('./charts/doughnut');
// var Line = require('./charts/line');
// var PolarArea = require('./charts/polar-area');
// var Radar = require('./charts/radar');
// var Scatter = require('./charts/scatter');



// Loading built-in plugins
var plugins = require('./plugins');
for (var k in plugins) {
	if (plugins.hasOwnProperty(k)) {
		Chart.plugins.register(plugins[k]);
	}
}

Chart.platform.initialize();

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

export default Chart