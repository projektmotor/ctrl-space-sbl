/* global cs, imageTools, window */

var margin;

cs.extend.addAutocompletion({
    name : 'margin-right',
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
            margin = imageTools.activeImage.width - layer.getRight();

            return {
                xStart: layer.getRight(),
                yStart: layer.getVerticalMiddle(),
                xEnd: imageTools.activeImage.width,
                yEnd: layer.getVerticalMiddle(),
                color: '#ff0000',
                text: 'margin-right: ' + margin + 'px'
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
                if (layers[0].getRight() > layers[1].getRight()) {
                    leftLayer = layers[1];
                    rightLayer = layers[0];
                } else {
                    leftLayer = layers[0];
                    rightLayer = layers[1];
                }
            };

            setMargin = function() {
                if (leftLayer.getRight() < rightLayer.getLeft()) {
                    margin = rightLayer.getLeft() - leftLayer.getRight();
                } else if (
                    leftLayer.getRight() > rightLayer.getLeft() &&
                    leftLayer.getRight() < rightLayer.getRight()
                ) {
                    margin = rightLayer.getRight() - leftLayer.getRight();
                } else {
                    margin = leftLayer.getRight() - rightLayer.getRight();
                }
            };

            getLinePosition = function () {
                var
                    lineTarget;

                lineTarget = (leftLayer.getRight() < rightLayer.getLeft())
                    ? rightLayer.getLeft()
                    : rightLayer.getRight();


                return {
                    x1 : lineTarget,
                    x2 : leftLayer.getRight(),
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
                text: 'margin-right: ' + margin + 'px'
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
        return "margin-right: "+margin+"px;";
    }
});