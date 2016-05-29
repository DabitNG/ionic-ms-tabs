angular.module('tabs', [])

	.config(function($stateProvider, $urlRouterProvider) {
	  $stateProvider

	  .state('app', {
	    url: '/app',
	    abstract: true,
	    templateUrl: 'modules/tabs/templates/tabs.html'
	  })

	  .state('app.search', {
	    url: '/search',
	    views: {
	      'app-search': {
	        templateUrl: 'modules/myModule/templates/search.html',
	      }
	    }
	  });

	  // if none of the above states are matched, use this as the fallback
	  $urlRouterProvider.otherwise('/app/search');
});