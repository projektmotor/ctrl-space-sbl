/* global cs, window */

/*
 * @todo: use correct property
 */
cs.extend.addAutocompletion({
    name : 'font-size',
    scope : 'text/css',
    onSelect : function(completionObject) {},
    onBlur : function() {},
    onSubmit : function() {
         var
            layers = cs.panel.image.getActiveSlimage().getSelectedLayers(),
            layer,
            textProperties = {},
            retrieveStyleInformation;

        retrieveStyleInformation = function () {
            var
                styleRanges = layer.getStyleRanges(),
                style;

             for (var styleRangeKey in styleRanges) {
                style = styleRanges[styleRangeKey].getStyle();

                for (var styleKey in style['properties']) {
                    textProperties[styleKey] = style['properties'][styleKey];
                }
            }
        };

        if (!layers || layers.length <= 0) {
            return "";
        }
        
        layer = layers[0];
        
        retrieveStyleInformation();

        if (textProperties['size'] === undefined) {
            cs.console.log('no font size property found in text formatting!')
            return "";
        } else {
            return "font-size: "+textProperties['size']+"px;"
        }
    }
});
