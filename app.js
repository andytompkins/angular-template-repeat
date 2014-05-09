angular.module('template-repeat-demo', [])
.controller('DemoController', [ '$scope', function DemoController($scope) {
	$scope.items = [
		{}, {}, {}, {}
	];
}]);