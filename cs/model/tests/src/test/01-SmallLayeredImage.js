/* global cs */

"use strict";

cs.test.addTestCase({
    name: 'SmallLayeredImage-Constructor-Empty',
    onRun: function () {
        var
            assertions = cs.test.assertions,
            slimage = cs.obj.factory.createSmallLayeredImage();

        assertions.assertNotEquals(slimage.getRaw(), undefined);
    }
});

cs.test.addTestCase({
    name: 'SmallLayeredImage-Constructor-Source',
    onRun: function () {
        var
            assertions = cs.test.assertions,
            slimage = cs.obj.factory.createSmallLayeredImage('../../dataFixtures/ctrl-space-header.jpg');

        assertions.assertNotEquals(slimage.getRaw(), undefined);
        // @todo: change child count to fixtures child count
        assertions.assertEquals(slimage.getNodeTree().childNodes.length, 3);
    }
});