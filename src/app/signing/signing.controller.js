(function() {
    'use strict';

    angular.module('gulpangular')
        .controller('SigningController', SigningController);

    /** @ngInject */
    function SigningController($log) {
        $log.debug('SigningController construct');

        activate();

        function activate() {
            $log.debug('SigningController activate');
        }
    }
})();
