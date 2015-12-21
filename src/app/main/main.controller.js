(function() {
    'use strict';

    angular.module('gulpangular')
        .controller('MainController', MainController);

    /** @ngInject */
    function MainController($log) {
        $log.debug('MainController construct');

        activate();

        function activate() {
            $log.debug('MainController activate');
        }
    }
})();
