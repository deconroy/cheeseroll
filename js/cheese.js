var cheese = angular.module("CheeseRoll", ['ui.bootstrap']);
// angular.module('myModule', ['ui.bootstrap']);
cheese.factory("Common", function() {
  return {
    location: function() {
    	return 'test';
    }
  };
});