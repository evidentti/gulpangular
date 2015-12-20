(function() {
    'use strict';

    angular.module('gulpangular')
    .controller('MainController', MainController);

    /** @ngInject */
    function MainController($timeout, webDevTec, toastr, $log) {
        $log.debug('MainController construct');
        var vm = this;

        vm.awesomeThings = [];
        vm.classAnimation = '';
        vm.creationDate = 1450578245343;
        vm.showToastr = showToastr;

        activate();

        function activate() {
            $log.debug('MainController activate');
            getWebDevTec();
            $timeout(function() {
                vm.classAnimation = 'rubberBand';
            }, 4000);
        }

        function showToastr() {
            // $log.debug('MainController showToastr');
            // toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
            // vm.classAnimation = '';
        }

        function getWebDevTec() {
            // $log.debug('MainController getWebDevTec');
            // vm.awesomeThings = webDevTec.getTec();
            //
            // angular.forEach(vm.awesomeThings, function(awesomeThing) {
            //     awesomeThing.rank = Math.random();
            // });
        }
    }
})();
