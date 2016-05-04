/* global cs, Packages */

"use strict";

cs.test.addTestCase({
    name: 'SlimLayer-Constructor-Empty',
    onRun: function () {
        var
            assertions = cs.test.assertions,
            slimLayer = cs.obj.factory.createSlimLayer();

        assertions.assertNotEquals(slimLayer.getRawSlimLayer(), undefined);
    }
});

cs.test.addTestCase({
    name: 'SlimLayer-Constructor-Color',
    onRun: function () {
        var
            assertions = cs.test.assertions,
            slimLayer = cs.obj.factory.createSlimLayerByColor('#FFAA00', 100, 100);

        assertions.assertNotEquals(slimLayer.getRawSlimLayer(), undefined);
    }
});

cs.test.addTestCase({
    name: 'SlimLayer-Constructor-File',
    onRun: function () {
        var
            assertions = cs.test.assertions,
            slimLayer = cs.obj.factory.createLayerFromFile('../../dataFixtures/ctrl-space-header.jpg');

        assertions.assertNotEquals(slimLayer.getRawSlimLayer(), undefined);
    }
});

cs.test.addTestCase({
    name: 'SlimLayer-Constructor-File-Scaled',
    onRun: function () {
        var
            assertions = cs.test.assertions,
            slimLayer = cs.obj.factory.createScaledLayerFrom('../../dataFixtures/ctrl-space-header.jpg', 150, 100);

        assertions.assertNotEquals(slimLayer.getRawSlimLayer(), undefined);
    }
});

cs.test.addTestCase({
    name: 'SlimLayer-Constructor-File-Scaled-Effect',
    onRun: function () {
        var
            assertions = cs.test.assertions,
            effect = Packages.javafx.scene.effect.BoxBlur(10, 10, 5),
            slimLayer = cs.obj.factory.createScaledEffectLayerFrom(
                '../../dataFixtures/ctrl-space-header.jpg',
                150,
                100,
                effect,
                10,
                10
            );

        assertions.assertNotEquals(slimLayer.getRawSlimLayer(), undefined);
    }
});