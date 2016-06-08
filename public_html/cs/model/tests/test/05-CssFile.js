/* global cs */

"use strict";

cs.test.addTestCase({
    name: 'CssFile-Constructor-Empty',
    onRun: function () {
        var
            assertions = cs.test.assertions,
            cssFile = cs.obj.factory.createCssFile();

        assertions.assertNotEquals(cssFile.getRaw(), undefined);
    }
});

cs.test.addTestCase({
    name: 'CssFile-Constructor-Source',
    onRun: function () {
        var
            assertions = cs.test.assertions,
            cssFile = cs.obj.factory.createCssFile('../../dataFixtures/main.css');

        assertions.assertNotEquals(cssFile.getRaw(), undefined);
    }
});