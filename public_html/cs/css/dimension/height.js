/* global cs, window */

cs.extend.addAutocompletion({
    name : 'height',
    scope : 'text/css',
    onSelect : function(completionObject) {
        var
            layers = cs.panel.image.getActiveSlimage().getSelectedLayers(),
            layer;

        if (!layers || layers.length <= 0) {
            return "";
        }
        
        layer = layers[0];

        cs.panel.image.drawLine(
            layer.getHorizontalMiddle(),
            layer.getTop(),
            layer.getHorizontalMiddle(),
            layer.getBottom(), 
            "height: "+layer.getHeight()+"px"
        );
    },
    onBlur : function() {
        cs.panel.image.clear();
    },
    onSubmit : function() {
        var
            layers = cs.panel.image.getActiveSlimage().getSelectedLayers();

        if (!layers || layers.length <= 0) {
            return "";
        }
        
        layer = layers[0];

        return "height: "+layer.getHeight()+"px;";
    }
});
