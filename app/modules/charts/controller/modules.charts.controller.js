var chartsCtrl = angular.module('modules.charts.controller', []);

chartsCtrl.controller('ChartsCtrl', ['$scope', function($scope) {
	$scope.moduleInfo = {
			"title" : "Charts"
	};
}]);
chartsCtrl.controller('DynamicChartCtrl', ['$scope', function($scope) {
	$scope.chart = {
			"chart": {
				type: "line"
			},
			title: {
				text: "Dynamic Line Chart"
			},
			size: 250,
			xAxis: {
				categories: [2012, 2013, 2014]
			},
			yAxis: {
				title: {
					text: "Umsatz"
				}
			},
			series: [{
				name: "Markus",
				data: [80000, 90000, 100000]
			}, {
				name: "Merlin",
				data: [50000, 60000, 70000]
			}]
	};
//	$scope.data = {
//		chart: {
//            type: 'line'
//        },
//        title: {
//            text: 'Dynamic Chart'
//        },
//        xAxis: {
//            categories: ['Apples', 'Bananas', 'Oranges']
//        },
//        yAxis: {
//            title: {
//                text: 'Fruit eaten'
//            }
//        },
//        series: [{
//            name: 'Jane',
//            data: [1, 0, 4]
//        }, {
//            name: 'John',
//            data: [5, 7, 3]
//        }]
//	};
}]);
