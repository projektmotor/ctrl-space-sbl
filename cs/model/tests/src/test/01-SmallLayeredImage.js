/* global cs */

"use strict";

cs.test.addTestCase({
    name: 'SmallLayeredImage-Constructor-Empty',
    onRun: function () {
        var
            assertions = cs.test.assertions,
            slimage = cs.obj.factory.createSmallLayeredImage();

        assertions.assertNotEquals(slimage.getRawSmallLayeredImage(), undefined);
    }
});

cs.test.addTestCase({
    name: 'SmallLayeredImage-Constructor-Source',
    onRun: function () {
        var
            assertions = cs.test.assertions,
            slimage = cs.obj.factory.createSmallLayeredImage('../../dataFixtures/ctrlspace_web_blue.slim');

        assertions.assertNotEquals(slimage.getRawSmallLayeredImage(), undefined);
        // @todo: change child count to fixtures child count
        assertions.assertEquals(slimage.getLayerRoot().getChildren().length, 3);
    }
});