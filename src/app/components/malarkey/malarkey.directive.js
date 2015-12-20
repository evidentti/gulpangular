(function() {
    'use strict';

    angular.module('gulpangular')
        .directive('acmeMalarkey', acmeMalarkey);

    /** @ngInject */
    function acmeMalarkey(malarkey, $log) {
        $log.debug('<acmeMalarkey> construct');
        var directive = {
            restrict: 'E',
            scope: {
                extraValues: '='
            },
            template: '&nbsp;',
            link: linkFunc,
            controller: MalarkeyController,
            controllerAs: 'vm'
        };

        return directive;

        function linkFunc(scope, el, attr, vm) {
            $log.debug('<acmeMalarkey> linkFunc');
            var watcher;
            var typist = malarkey(el[0], {
                typeSpeed: 40,
                deleteSpeed: 40,
                pauseDelay: 800,
                loop: true,
                postfix: ' '
            });

            el.addClass('acme-malarkey');

            angular.forEach(scope.extraValues, function(value) {
                typist.type(value).pause().delete();
            });

            watcher = scope.$watch('vm.contributors', function() {
                angular.forEach(vm.contributors, function(contributor) {
                    typist.type(contributor.login).pause().delete();
                });
            });

            scope.$on('$destroy', function() {
                watcher();
            });
        }

        /** @ngInject */
        function MalarkeyController($log, githubContributor) {
            $log.debug('<acmeMalarkey> MalarkeyController construct');
            var vm = this;

            vm.contributors = [];

            activate();

            function activate() {
                $log.debug('<acmeMalarkey> MalarkeyController activate');
                return getContributors().then(function() {
                    $log.debug('<acmeMalarkey> MalarkeyController getContributors resolved');
                });
            }

            function getContributors() {
                $log.debug('<acmeMalarkey> MalarkeyController getContributors');
                return githubContributor.getContributors(10).then(function(data) {
                    $log.debug('<acmeMalarkey> MalarkeyController githubContributor.getContributors resolved');
                    vm.contributors = data;

                    return vm.contributors;
                });
            }
        }
    }

})();
