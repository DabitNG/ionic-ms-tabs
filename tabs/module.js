/**
* Tabs Module. 
* @author DabitNG 
*/

angular.module('tabs', [])

	/**
	 * Global configuration for this module
	 * Configure your diferentet views here
	 * @param $stateProvider
	 * @param $urlRouterProvider
	 * @return
	 */
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
	  })
	  
	  .state('app.search', {
	    url: '/search',
	    views: {
	      'app-search': {
	        templateUrl: 'modules/tabs/templates/search.html',
	      }
	    }
	  });

	  // if none of the above states are matched, use this as the fallback
	  $urlRouterProvider.otherwise('/app/home');
});