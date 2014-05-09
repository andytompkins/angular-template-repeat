angular.module('template-repeat-demo', ['template-repeat'])
.controller('DemoController', [ '$scope', function DemoController($scope) {
	
	$scope.numRows = 10;
	
	var itemList = [];
	
	var numObjs = 2000;
	for (var i = 0; i < numObjs; i++) {
		var obj = {
			id: i
		};
		itemList.push(obj);
	}
	$scope.allItems = itemList;
	$scope.items = itemList.slice(0, $scope.numRows);
}]);