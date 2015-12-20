(function() {
    'use strict';

    angular.module('gulpangular')
        .config(routerConfig);

    /** @ngInject */
    function routerConfig($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'app/main/main.html',
                controller: 'MainController',
                controllerAs: 'main'
            })
            .state('meetings', {
                url: '/meetings',
                templateUrl: 'app/meetings/meetings.html',
                controller: 'MeetingsController',
                controllerAs: 'meetings'
            })
            .state('signing', {
                url: '/signing',
                templateUrl: 'app/signing/signing.html',
                controller: 'SigningController',
                controllerAs: 'signing'
            });

        $urlRouterProvider.otherwise('/');
    }

})();
