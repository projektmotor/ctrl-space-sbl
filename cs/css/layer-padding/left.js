/* global cs, imageTools, window */

var padding;

cs.extend.addAutocompletion({
    name : 'padding-left',
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
            padding = layer.getLeft();

            return {
                xStart: 0,
                yStart: layer.getVerticalMiddle(),
                xEnd: layer.getLeft(),
                yEnd: layer.getVerticalMiddle(),
                color: '#ff0000',
                text: 'padding-left: ' + padding + 'px'
            };
        };

        getDoubleLayerLine = function() {
            var
                setLayers,
                setMargin,
                getLinePosition,
                leftLayer,
                rightLayer,
                linePosition;

            setLayers = function() {
                if (layers[0].getLeft() > layers[1].getLeft()) {
                    leftLayer = layers[1];
                    rightLayer = layers[0];
                } else {
                    leftLayer = layers[0];
                    rightLayer = layers[1];
                }
            };

            setMargin = function() {
                if (leftLayer.getRight() < rightLayer.getLeft()) {
                    padding = rightLayer.getLeft() - leftLayer.getRight();
                } else {
                    padding = rightLayer.getLeft() - leftLayer.getLeft();
                }
            };

            getLinePosition = function () {
                var
                    lineTarget;

                lineTarget = (leftLayer.getRight() < rightLayer.getLeft())
                    ? leftLayer.getRight()
                    : leftLayer.getLeft();

                return {
                    x1 : lineTarget,
                    x2 : rightLayer.getLeft(),
                    y  : rightLayer.getVerticalMiddle()
                };
            };

            setLayers();
            setMargin();
            linePosition = getLinePosition();

            return {
                xStart: linePosition.x1,
                yStart: linePosition.y,
                xEnd: linePosition.x2,
                yEnd: linePosition.y,
                color: '#ff0000',
                text: 'padding-left: ' + padding + 'px'
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
        return "padding-left: "+padding+"px;";
    }
});