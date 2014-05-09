(function() {
	'use strict';
	
	angular.module('angular-measure', [])
	.factory('$measure', [ function $measure() {
		
		var measurements = {};

		var MeasureException = function(message) {
			this.message = message;
			this.name = 'MeasureException';
		};

		var start = function(label) {
			if (!label) {
				throw new MeasureException('null measurement label');
			} else if (label === '') {
				throw new MeasureException('blank measurement label');
			} else if (measurements.hasOwnProperty(label)) {
				throw new MeasureException('duplicate measurement label: ' + label);
			}
			measurements[label] = {};
			// jshint ignore:start
			measurements[label].t0 = performance.now();
			// jshint ignore:end
		};

		var stop = function(label, callback) {
			if (!label) {
				throw new MeasureException('null measurement label');
			} else if (label === '') {
				throw new MeasureException('blank measurement label');
			} else if (!measurements.hasOwnProperty(label)) {
				throw new MeasureException('label not found: ' + label);
			}
			// jshint ignore:start
			measurements[label].t1 = performance.now();
			// jshint ignore:end
			var t = (measurements[label].t1 - measurements[label].t0);
			console.log(label + " took " + t + " ms");
			if (callback && typeof callback == 'function') {
				callback(t)
			}
			delete measurements[label];
			t = null;
		};

		return {
			$start: start,
			$stop: stop
		};
		
	}]);
	
}());
