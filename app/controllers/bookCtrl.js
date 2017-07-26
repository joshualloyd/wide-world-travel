'use strict';

travelApp.controller('bookCtrl', function($scope, GuideFactory){

	GuideFactory.getBooks()
	.then((booksData)=>{
		console.log('booksData', booksData.data.guides);
		$scope.books = booksData.data.guides;
	});

});