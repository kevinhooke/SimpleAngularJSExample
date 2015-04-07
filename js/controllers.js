var simpleApp = angular.module('simpleApp', []);

simpleApp.controller('simpleCtrl', function($scope) {
		
	$scope.msg = "Hello world! Simplest-case AngularJS example app";
	
	$scope.hello = function(){
		if($scope.formdata.name != ""){
			$scope.hellomsg = "Hello " + $scope.formdata.name;
		}
		else{
			$scope.hellomsg = "";
		}
	};
	
});