/* global cs, window */

cs.extend.addAutocompletion({
    name : 'background-color (HEX)',
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

        return "background-color: #" + layer.getAverageColor('hex') + ";";
    }
});

