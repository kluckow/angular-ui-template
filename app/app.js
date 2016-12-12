var todoApp = angular.module('todoApp',
		[
		 	// external modules
		 	'ui.router',
		 	// home module
		 	'modules.dashboard.controller',
		 	// todo module
		 	'modules.todo.controller',
		 	'modules.todo.directive',
		 	'modules.lol.controller',
		 	'modules.charts.controller',
		 	// util stuff
		 	'modules.common.directives.navigation',
		 	'modules.common.directives.chart',
		 	'modules.common.util.date',
		 	]);

todoApp.config(['$urlRouterProvider', '$stateProvider', function ($urlRouterProvider, $stateProvider) {
	
	$urlRouterProvider.otherwise('/');
	
	$stateProvider
		.state('dashboard', {
			url: '/',
			templateUrl: 'app/view/dashboard/dashboard.html',
			controller: 'DashboardCtrl'
		})
		.state('todo', {
			url: '/todo',
			templateUrl: 'app/view/todo/todo.html',
			controller: 'TodoCtrl'
		})
		.state('lol', {
			url: '/lol',
			templateUrl: 'app/view/lol/lol.html',
			controller: 'LolCtrl'
		})
		.state('charts', {
			url: '/charts',
			templateUrl: 'app/view/charts/charts.html',
			controller: 'ChartsCtrl'
		})
}]);









