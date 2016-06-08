/* global cs */

"use strict";

cs.test.addTestCase({
    name: 'HtmlFile-Constructor-Empty',
    onRun: function () {
        var
            assertions = cs.test.assertions,
            htmlFile = cs.obj.factory.createHtmlFile();

        assertions.assertNotEquals(htmlFile.getRaw(), undefined);
    }
});

cs.test.addTestCase({
    name: 'HtmlFile-Constructor-Source',
    onRun: function () {
        var
            assertions = cs.test.assertions,
            htmlFile = cs.obj.factory.createHtmlFile('../../dataFixtures/index.html');

        assertions.assertNotEquals(htmlFile.getRaw(), undefined);
    }
});