/* global cs, window, io, project */

/**
 * @todo: request filename
 */
cs.extend.addAutocompletion({
    name : 'navigation-horizontal',
    scope : 'text/css',
    onSelect : function(completionObject) {},
    onBlur : function() {},
    onSubmit : function() {
        return ".navigation {\n\
    list-style-type: none;\n\
    margin: 0;\n\
    padding: 0;\n\
}\n\
\n\
.navigation li {\n\
    display:inline;\n\
}";
    }
});

