var nav = angular.module('modules.common.directives.navigation', []);

nav.directive('navigationBar', function() {
	return {
		restrict: 'E',
		templateUrl: 'app/modules/common/partials/navigation-bar.html'
	}
});