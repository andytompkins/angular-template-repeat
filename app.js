angular.module('template-repeat-demo', [])
.controller('DemoController', [ '$scope', function DemoController($scope) {
	
	$scope.items = [];
	
	var numObjs = 5;
	for (var i = 0; i < numObjs; i++) {
		var obj = {
			id: i
		};
		$scope.items.push(obj);
	}
	
}]);