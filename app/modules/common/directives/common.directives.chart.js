var chart = angular.module('modules.common.directives.chart', []);

chart.directive('highchart', function() {
	return {
		restrict: 'E',
		scope: {
			chart: '='
		},
		templateUrl: 'app/modules/common/partials/highchart.html',
		link: function(scope, element, attrs) {
			console.log(scope.chart.title.text);
			return attrs.chart;
		}
	}
});
// Highcharts Line Chart
//$(function () { 
//    $('#highchartLine').highcharts({
//        chart: {
//            type: 'line'
//        },
//        title: {
//            text: 'Fruit Consumption'
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
//    });
//});