angular.module('template-repeat-demo', ['template-repeat'])
.controller('DemoController', [ '$scope', function DemoController($scope) {
	
	var itemList = [];
	
	var numObjs = 5;
	for (var i = 0; i < numObjs; i++) {
		var obj = {
			id: i
		};
		itemList.push(obj);
	}
	$scope.items = itemList;
}]);