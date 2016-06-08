/* global cs, window, io, project */
var twoColumnLayout = {
    leftLayer: {},
    leftCSS: {},
    leftNode: {},
    rightLayer: {},
    rightCSS: {},
    rightNode: {},
    contentWrapper: "noWrapper",
    build: function () {
        this.buildLayoutFrameIfNeeded();
        blueprint.call("TwoColsLeft", [this.contentWrapper]);
        blueprint.call("TwoColsRight", [this.contentWrapper]);
        this.configureLeft();
        this.configureRight();
        console.out("finished building 2col layout");
    },
    buildLayoutFrameIfNeeded: function () {
        this.contentWrapper = document.$("#content-wrapper").get()[0];
        if (typeof this.contentWrapper == "undefined") {
            blueprint.call("layoutFrame.createLayout");
            this.buildLayoutFrameIfNeeded();//run recursive to see if frame was created
        }
    },
    configureLeft: function () {
        this.leftCSS = this.makeStyleFor("content-left");
        this.leftNode.layer = this.leftLayer;
        this.leftCSS.setProperty("float", "left");
        // dig into the width needs. doesnt work as expected. if enlightend, reinsert it: this.leftCSS.setProperty("width", 			this.leftLayer.width+"px");
    },
    configureRight: function () {
        this.rightCSS = this.makeStyleFor("content-right");
        this.rightNode.layer = this.rightLayer;
        this.rightCSS.setProperty("float", "left");
        // dig into the width needs. doesnt work as expected. if enlightend, reinsert it: 	this.rightCSS.setProperty("width", 			this.rightLayer.width+"px");
        this.leftCSS.setProperty("margin-right", this.leftNode.calcSpaceToNodeOnRight() + "px");
    },
    makeStyleFor: function (id) {
        var styleCode = "#" + id + "{}";
        return project.insertCSS(styleCode);
    },
};




