/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

blueprint.registerTestCase("basicTest.equals()- OK", new Packages.api.Function({
    run: function () {
        tests.assertEquals("a", "a");
    }
}));

blueprint.registerTestCase("basicTest.equals() - FAIL", new Packages.api.Function({
    run: function () {
        tests.assertEquals("a", "b");
    }
}));

blueprint.registerTestCase("basicTest.equals() - ERROR", new Packages.api.Function({
    run: function () {
        tests.assertEquals("a", a.b());
    }
}));
