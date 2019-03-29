var app = angular.module('Portfolio', []);
app.controller('PortfolioCtrl', function($scope){
	$scope.name = "Lawrence Kyalo";
	$scope.title = "Lead Developer";

app.directive(function($scope){
	return template: "<div> {{ $value }} </div>"
});

});

function getCurrentYr(){
	const yr = new Date.getFullYear();
}
