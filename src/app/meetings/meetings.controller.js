(function() {
    'use strict';

    angular.module('gulpangular')
        .controller('MeetingsController', MeetingsController);

    /** @ngInject */
    function MeetingsController($log) {
        $log.debug('MeetingsController construct');

        activate();

        function activate() {
            $log.debug('MeetingsController activate');
        }
    }
})();
