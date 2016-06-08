io.include("text.js");


cs.extend.addAutocompletion({
    name : 'Layer text',
    scope : 'text/html',
    onSelect : function(completionObject) {},
    onBlur : function() {},
    onSubmit : function() {
        var text = cs.html.text.getLayerText('\n');
        return text;
    }
});

cs.extend.addAutocompletion({
    name : 'Lorem Ipsum Text',
    scope : 'text/html',
    onSelect : function(completionObject) {},
    onBlur : function() {},
    onSubmit : function() {
        var words = window.input("Enter word number", "How many words shall be produced?", "50");
        var text = cs.html.text.loremIpsum(words, 10);
        return text;
    }
});