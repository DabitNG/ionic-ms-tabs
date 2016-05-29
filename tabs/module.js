angular.module('tabs', [])

	.config(function($stateProvider, $urlRouterProvider) {
	  $stateProvider

	  .state('app', {
	    url: '/app',
	    abstract: true,
	    templateUrl: 'modules/tabs/templates/tabs.html'
	  })

	  .state('app.home', {
	    url: '/home',
	    views: {
	      'app-home': {
	        templateUrl: 'modules/tabs/templates/home.html',
	      }
	    }
	  });

	  // if none of the above states are matched, use this as the fallback
	  $urlRouterProvider.otherwise('/app/home');
});