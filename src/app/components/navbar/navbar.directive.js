(function() {
    'use strict';

    angular.module('gulpangular')
        .directive('acmeNavbar', acmeNavbar);

    /** @ngInject */
    function acmeNavbar($log) {
        $log.debug('<acmeNavbar> construct');
        var directive = {
            restrict: 'E',
            templateUrl: 'app/components/navbar/navbar.html',
            scope: {
                creationDate: '='
            },
            controller: NavbarController,
            controllerAs: 'vm',
            bindToController: true
        };

        return directive;

        /** @ngInject */
        function NavbarController() {
            $log.debug('<acmeNavbar> NavbarController construct');
        }
    }

})();
