'use strict';

let travelApp = angular.module('app', ['ngRoute']);

travelApp.config(($routeProvider) => {
	$routeProvider
		.when('/', {
			templateUrl: 'partials/guide-list.html',
			controller: 'bookCtrl'
		})
		.otherwise('/');
});