(function(){ // iife
	'use strict'; // to make sure global variables are not declared accidentaly
	angular.module('myFirstApp', [])

	.controller('MyFirstController', function($scope){
		$scope.name = "defaultValue";
		$scope.sayHello = function() {
			return "Hello "+ $scope.name;
		}
	});
})();