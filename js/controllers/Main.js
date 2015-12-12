cheese.controller('Main', ['$scope', function($scope) { 
 	//objects for reuse
  $scope.pages = {
  	home: {
		title: 'Home',
		link: '#home'
  	},
  	services: {
  		title: 'Services',
  		link: '#services'
  	},
  	contact: {
  		title: 'Contact',
  		link: '#contact'
  	}
  };
  $scope.isCollapsed = true;

  //init page
  $scope.location = window.location.hash.length > 1 ? window.location.hash.substring(1) : 'home';
  $scope.current_page = $scope.pages[$scope.location];

  $scope.goToPage = function(page) {
    $scope.current_page = page;
  }
}]);