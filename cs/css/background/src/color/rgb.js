/* global cs, window */

cs.extend.addAutocompletion({
    name : 'background-color (RGB)',
    scope : 'text/css',
    onSelect : function(completionObject) {},
    onBlur : function() {},
    onSubmit : function() {
        var
            layers = cs.panel.image.getActiveSlimage().getSelectedLayers(),
            layer,
            rgba;

        if (!layers || layers.length <= 0) {
            return "";
        }
        
        layer = layers[0];
        color = layer.getAverageColor('rgba');

        return "background-color: rgba(" + color.r + "," + color.g + "," + color.b + "," + color.a + ");";
    }
});

