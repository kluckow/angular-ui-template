var date = angular.module('modules.common.util.date', []);

date.controller('DateCtrl', ['$scope', '$interval', function($scope, $interval) {
	$interval(function() {
		$scope.currentTime = new Date();
	}, 1000);
}]);
date.directive('dateTime', function() {
	return {
		restrict: 'E',
		scope: {
			// get the transferred "format" attribute (<date-time format="'dd.MMM.yyyy HH:mm:ss'"></date-time>
			// and set the $scope.format value before requesting templateUrl
			format: '='
		},
		templateUrl: 'app/modules/common/partials/date-time.html',
		controller: 'DateCtrl'
	}
});