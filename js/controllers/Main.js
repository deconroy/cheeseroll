cheese.controller('Main', ['$scope', '$location', 'Common', function($scope, $location, Common) { 
	//objects for reuse
	$scope.hash = $location.url().substring(1);
	$scope.pages = {
		home: new Page('home', 'Home', true),
		services: new Page('services', 'Services'),
		contact: new Page('contact', 'Contact')
	};
	$scope.isCollapsed = true;
	if (!$scope.pages[$scope.hash]) {
		$scope.current_page = $scope.default_page;
	} else {
		$scope.current_page = $scope.pages[$scope.hash];
	}
	$scope.page_body = getPageContent($scope.current_page);

	$scope.goToPage = function(page) {
		$scope.current_page = page;
		$scope.isCollapsed = !$scope.isCollapsed;
		$scope.page_body = getPageContent($scope.current_page);
	}
	function Page(id, display, defaultPage) {
		this.id = id;
		this.link = '#' + this.id;
		this.title = display;
		if (defaultPage) $scope.default_page = this;
	}
}]);
// function getHash() {
// 	return window.location.hash.length > 1 ? window.location.hash.substring(1) : 'home';
// }
function getPageContent(page) {
	return page.title + ' content';
}