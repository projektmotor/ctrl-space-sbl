/* global cs, window */

/*
 * @todo: use correct color
 */
cs.extend.addAutocompletion({
    name : 'color',
    scope : 'text/css',
    onSelect : function(completionObject) {},
    onBlur : function() {},
    onSubmit : function() {
        var
            layers = cs.panel.image.getActiveSlimage().getSelectedLayers(),
            layer;

        if (!layers || layers.length <= 0) {
            return "";
        }
        
        layer = layers[0];

        return "color: #" + layer.getAverageColor('hex') + ";";
    }
});
