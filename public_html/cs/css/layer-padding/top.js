/* global cs, imageTools, window */

var padding;

cs.extend.addAutocompletion({
    name : 'padding-top',
    scope : 'text/css',
    onSelect : function(completionObject) {
        var
            line,
            getSingleLayerLine,
            getDoubleLayerLine,
            layers = cs.panel.image.getActiveSlimage().getSelectedLayers();

        getSingleLayerLine = function() {
            var layer;

            layer = layers[0];
            padding = layer.getTop();

            return {
                xStart: layer.getHorizontalMiddle(),
                yStart: 0,
                xEnd: layer.getHorizontalMiddle(),
                yEnd: layer.getTop(),
                color: '#ff0000',
                text: 'padding-top: ' + padding + 'px'
            };
        };

        getDoubleLayerLine = function() {
            var
                setLayers,
                setMargin,
                getLinePosition,
                topLayer,
                bottomLayer,
                linePosition;

            setLayers = function() {
                if (layers[0].getTop() > layers[1].getTop()) {
                    topLayer = layers[1];
                    bottomLayer = layers[0];
                } else {
                    topLayer = layers[0];
                    bottomLayer = layers[1];
                }
            };

            setMargin = function() {
                if (topLayer.getBottom() < bottomLayer.getTop()) {
                    padding = bottomLayer.getTop() - topLayer.getBottom();
                } else {
                    padding = bottomLayer.getTop() - topLayer.getTop();
                }
            };

            getLinePosition = function () {
                var
                    lineTarget;

                lineTarget = (topLayer.getBottom() < bottomLayer.getTop())
                    ? topLayer.getBottom()
                    : topLayer.getTop();

                return {
                    x  : bottomLayer.getHorizontalMiddle(),
                    y1 : bottomLayer.getTop(),
                    y2 : lineTarget
                };
            };

            setLayers();
            setMargin();
            linePosition = getLinePosition();

            return {
                xStart: linePosition.x,
                yStart: linePosition.y1,
                xEnd: linePosition.x,
                yEnd: linePosition.y2,
                color: '#ff0000',
                text: 'padding-top: ' + padding + 'px'
            };
        };

        if (
            layers !== undefined &&
            layers.length >= 1 &&
            layers.length <= 2
        ) {
            line = (layers.length === 2)
                ? getDoubleLayerLine()
                : getSingleLayerLine();

            cs.panel.image.drawLine(
                line.xStart,
                line.yStart,
                line.xEnd,
                line.yEnd,
                line.text,
                line.color
            );
        }
    },
    onBlur : function() {
        cs.panel.image.clear();
    },
    onSubmit : function() {
        return "padding-top: "+padding+"px;";
    }
});