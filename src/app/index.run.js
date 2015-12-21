(function() {
    'use strict';

    angular.module('gulpangular')
        .run(runBlock);

    /** @ngInject */
    function runBlock($rootScope, $log, state) {

        var listener = $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState /*, fromParams*/ ) {
            $log.info(event);
            if (state[fromState.url] > state[toState.url]) {
                $log.info('BACK');
            } else {
                $log.info('FORWARD');
            }

            $log.info(event.targetScope.z);

            if (event.targetScope.animationClass === "view-enter") {
                event.targetScope.animationClass = "view-leave";
            } else {
                event.targetScope.animationClass = "view-enter";
            }
        });

        $rootScope.$on('$destroy', function() {
            listener;
        });

    }

})();
