angular.module('template-repeat', [])
.directive('templateRepeat', [ '$templateCache', '$cacheFactory', '$compile',
function($templateCache, $cacheFactory, $compile) {
	
	var cache = $cacheFactory('templateRepeat');
	cache.removeAll();

	return {
		priority: 1000,
		terminal: true,
		link: function(scope, element, attr) {
			var expression = attr.templateRepeat;
			var match = expression.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)\s*$/),
				lhs, rhs, valueIdentifier, keyIdentifier;

			if (!match) {
				throw new Error("templateRepeat: Expected expression in form of '_item_ in _collection_' but got '" + expression + "'.");
			}

			lhs = match[1];
			rhs = match[2];

			match = lhs.match(/^(?:([\$\w]+)|\(([\$\w]+)\s*,\s*([\$\w]+)\))$/);
			
			if (!match) {
				throw new Error("'_item_' in '_item_ in _collection_' should be an identifier or '(_key_, _value_)' expression, but got '" + lhs + "'.");
			}
			
			valueIdentifier = match[3] || match[1];
			keyIdentifier = match[2];

			var template = $templateCache.get(attr.template);

			if (attr.cacheRows && attr.cacheKey) {
				var unregister = scope.$watchCollection(attr.cacheRows, function(collection) {
					if (!collection || !collection.length) { 
						return;
					}
					for (var i = 0, upper = collection.length; i < upper; i++) {
						var data = collection[i];
						data.$index = i;
						var ngTemplate = _.template(template)(data);
						var rowElem = $compile(ngTemplate)(scope);
						cache.put(data[attr.cacheKey], rowElem);
					}
					setTimeout(function() { unregister(); }, 0);
				});
			}

			scope.$on('$destroy', function() {
				cache.removeAll();
			});

			scope.$watchCollection(rhs, function(collection) {
				if (!collection) { 
					return; 
				}
				while (element[0].hasChildNodes()) {
					element[0].removeChild(element[0].lastChild);
				}

				var fragment = document.createDocumentFragment();

				for (var i = 0, upper = collection.length; i < upper; i++) {
					var data = collection[i];
					var rowElem = cache.get(data.ruleId);
					if (!rowElem) {
						continue;
					}
					fragment.appendChild(rowElem[0]);
				}
				element.append(fragment);
			});
		}
	};
}]);