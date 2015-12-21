(function() {
    'use strict';

    describe('SigningController', function() {
        var controller;

        beforeEach(module('gulpangular'));
        beforeEach(inject(function(_$controller_) {
            controller = _$controller_('SigningController');
        }));

        it('should have created', function() {
            expect(controller).not.toEqual(null);
        });
    });
})();
