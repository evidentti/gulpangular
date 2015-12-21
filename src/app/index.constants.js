/* global malarkey:false, moment:false */
(function() {
    'use strict';

    angular.module('gulpangular')
        .constant('malarkey', malarkey)
        .constant('moment', moment)
        .constant('state', {
            '/' : 0,
            '/meetings': 1,
            '/signing': 2
        });

})();
