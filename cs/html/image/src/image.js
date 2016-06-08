/* global cs, window, io, project */

/**
 * @todo: request filename
 */
cs.extend.addAutocompletion({
    name : '&lt;img&gt; (generates image)',
    scope : 'text/html',
    onSelect : function(completionObject) {},
    onBlur : function() {},
    onSubmit : function() {
        var
            filename = null,
            layers = [],
            layer,
            getFilename,
            getWebPath,
            saveImage;

        getFilename = function () {
            var
                buildFilename;

            buildFilename = function () {
                return layer.getName().replace(' ','_') + '.png';
            };

            return (filename !== null)
                ? filename
                : buildFilename();
        };

        getWebPath = function() {
            return 'images/' + getFilename();
        };

        saveImage = function() {
            var
                getPath;

            getPath = function() {
                var
                    path = project.defaultImagePath;

                if (!io.isDirectory(path)) {
                    io.createDirectory(path);
                }

                return path + '/' + getFilename();
            };

            io.writeImage(layer.getImage(), getPath());
        };

        layers = cs.panel.image.getActiveSlimage().getSelectedLayers();

        if (!layers || layers.length <= 0) {
            return "";
        }

        layer = layers[0];

        saveImage();

        return "<img src=\"" + getWebPath() + "\" alt=\"\" />";
    }
});

