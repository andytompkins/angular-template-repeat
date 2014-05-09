angular.module('template-repeat-demo', ['template-repeat'])
.controller('DemoController', [ '$scope', function DemoController($scope) {
	
	$scope.items = [];
	
	var numObjs = 5;
	for (var i = 0; i < numObjs; i++) {
		var obj = {
			id: i
		};
		$scope.items.push(obj);
	}
	console.log(JSON.stringify($scope.items));	
}]);