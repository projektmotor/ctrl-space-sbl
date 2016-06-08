io.include("./twoColLayout.js");


cs.extend.addAutocompletion({
    name : 'Layout: 2 columns',
    scope : 'text/html',
    onSelect : function(completionObject) {},
    onBlur : function() {},
    onSubmit : function() {
        twoColLayout.build();
        return "";
    }
});