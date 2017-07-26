'use strict';

travelApp.controller('bookCtrl', function($scope, $http, $q){
	$scope.books;

	let getBooks = () => {
		return $q((resolve, reject)=>{
			$http.get('../../data/guides.json')
			.then((guides)=>{
				resolve(guides);
			})
			.catch((err)=>{
				console.log('that guides xhr went badly', err);
			});
		});
	};

	getBooks()
	.then((booksData)=>{
		console.log('booksData', booksData.data.guides);
		$scope.books = booksData.data.guides;
	});

});