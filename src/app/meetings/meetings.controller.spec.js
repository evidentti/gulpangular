(function() {
    'use strict';

    describe('MeetingsController', function() {
        var controller;

        beforeEach(module('gulpangular'));
        beforeEach(inject(function(_$controller_) {
            controller = _$controller_('MeetingsController');
        }));

        it('should have created', function() {
            expect(controller).not.toEqual(null);
        });
    });
})();
