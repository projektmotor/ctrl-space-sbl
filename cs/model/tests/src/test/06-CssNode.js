/* global cs */

"use strict";

cs.test.addTestCase({
    name: 'CssNode-Constructor-Empty',
    onRun: function () {
        var
            assertions = cs.test.assertions,
            cssNode = cs.obj.factory.createCssNode();

        assertions.assertNotEquals(cssNode.getRaw(), undefined);
    }
});

cs.test.addTestCase({
    name: 'CssNode-Constructor-Parse',
    onRun: function () {
        var
            assertions = cs.test.assertions,
            cssCode = '.my-selector {font-size: 12em;}',
            cssNode = cs.obj.factory.createCssNode(cssCode);

        assertions.assertNotEquals(cssNode.getRaw(), undefined);
    }
});