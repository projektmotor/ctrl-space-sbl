/* global cs, imageTools, window */

var bottom;

cs.extend.addAutocompletion({
    name : 'bottom',
    scope : 'text/css',
    onSelect : function(completionObject) {
        var
            line,
            getSingleLayerLine,
            getDoubleLayerLine,
            layers = cs.panel.image.getActiveSlimage().getSelectedLayers();

        getSingleLayerLine = function() {
            var layer = layers[0];

            bottom = project.activeImage.height - layer.getBottom();

            return {
                xStart: layer.getHorizontalMiddle(),
                yStart: project.activeImage.height,
                xEnd: layer.getHorizontalMiddle(),
                yEnd: layer.getBottom(),
                color: '#ff0000',
                text: 'bottom: ' + bottom + 'px'
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
                    bottom = bottomLayer.getTop() - topLayer.getBottom();
                } else if (
                    topLayer.getBottom() > bottomLayer.getTop() &&
                    topLayer.getBottom() < bottomLayer.getBottom()
                ) {
                    bottom = bottomLayer.getBottom() - topLayer.getBottom();
                } else {
                    bottom = topLayer.getBottom() - bottomLayer.getBottom();
                }
            };

            getLinePosition = function () {
                var
                    lineTarget;

                lineTarget = (topLayer.getBottom() < bottomLayer.getTop())
                    ? bottomLayer.getTop()
                    : bottomLayer.getBottom();

                return {
                    x  : bottomLayer.getHorizontalMiddle(),
                    y1 : topLayer.getBottom(),
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
                text: 'bottom: ' + bottom + 'px'
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
        return "bottom: "+bottom+"px;";
    }
});