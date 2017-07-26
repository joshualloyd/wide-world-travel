'use strict';

travelApp.factory('GuideFactory', function($q, $http){
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
	return {getBooks};
});