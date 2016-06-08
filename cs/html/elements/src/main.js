var html = {
    jsLink: function (target){
        var scriptLinkCode = '<script type="text/javascript" src=""></script>';
        var scriptNode = fileManager.parseHTML(scriptLinkCode);
        scriptNode.setAttribute("src", target);
        return scriptNode;
    },
    cssLink: function (target){
        var scriptLinkCode = '<link rel="stylesheet" type="text/css" media="screen"> </link>';
        var scriptNode = fileManager.parseHTML(scriptLinkCode);
        scriptNode.setAttribute("href", target);
        return scriptNode;
    }
};
