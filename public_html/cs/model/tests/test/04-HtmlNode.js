/* global cs */

"use strict";

cs.test.addTestCase({
    name: 'HtmlNode-Constructor-Empty',
    onRun: function () {
        var
            assertions = cs.test.assertions,
            htmlNode = cs.obj.factory.createHtmlNode();

        assertions.assertNotEquals(htmlNode.getRaw(), undefined);
    }
});

cs.test.addTestCase({
    name: 'HtmlNode-Constructor-Parse',
    onRun: function () {
        var
            assertions = cs.test.assertions,
            htmlCode = '<a href="/my/target.html" title="target">my target</a>',
            htmlNode = cs.obj.factory.createHtmlNode(htmlCode);

        assertions.assertNotEquals(htmlNode.getRaw(), undefined);
    }
});