angular.module('template-repeat-demo', ['template-repeat'])
.controller('DemoController', [ '$scope', function DemoController($scope) {
	
	$scope.setRows = function(numRows) {
		$scope.items = itemList.slice(0, numRows);
	};
		
	var itemList = [];
	
	var numObjs = 2000;
	for (var i = 0; i < numObjs; i++) {
		var obj = {
			id: i
		};
		itemList.push(obj);
	}
	$scope.allItems = itemList;
	$scope.setRows(10);
	
	
	
}]);