(function() {
    'use strict';

    describe('MainController', function() {
        var controller;

        beforeEach(module('gulpangular'));
        beforeEach(inject(function(_$controller_) {
            controller = _$controller_('MainController');
        }));

        it('should have created', function() {
            expect(controller).not.toEqual(null);
        });
    });
})();
