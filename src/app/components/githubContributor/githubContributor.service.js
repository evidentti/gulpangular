(function() {
    'use strict';

    angular.module('gulpangular')
    .factory('githubContributor', githubContributor);

    /** @ngInject */
    function githubContributor($log, $http) {
        $log.debug('[githubContributor] construct');
        var apiHost = 'https://api.github.com/repos/Swiip/generator-gulp-angular';

        var service = {
            apiHost: apiHost,
            getContributors: getContributors
        };

        return service;

        function getContributors(limit) {
            $log.debug('[githubContributor] getContributors');
            if (!limit) {
                limit = 30;
            }

            return $http.get(apiHost + '/contributors?per_page=' + limit)
            .then(getContributorsComplete)
            .catch(getContributorsFailed);

            function getContributorsComplete(response) {
                $log.debug('[githubContributor] getContributors getContributorsComplete');
                return response.data;
            }

            function getContributorsFailed(error) {
                $log.error('[githubContributor] getContributors getContributorsFailed\n' + angular.toJson(error.data, true));
            }
        }
    }
})();
