/* global cs, window */

cs.extend.addAutocompletion({
    name : 'width',
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
            layer.getLeft(),
            layer.getVerticalMiddle(),
            layer.getRight(),
            layer.getVerticalMiddle(),
            "width: "+layer.getWidth()+"px"
        );
    },
    onBlur : function() {
        cs.panel.image.clear();
    },
    onSubmit : function() {
        var
            layers = cs.panel.image.getActiveSlimage().getSelectedLayers(),
            layer;

        if (!layers || layers.length <= 0) {
            return "";
        }
        
        layer = layers[0];

        return "width: "+layer.getWidth()+"px;";
    }
});
