/** @jsx React.DOM */
var CM = window.CodeMirror;
var CodeMirrorComponent = React.createClass({

    // interesting stuff
    getOptions: function(){
        var opts = extend({
            mode: "javascript",
            lineNumbers: true,
            theme: "ambiance",
            viewportMargin: Infinity
        }, this.props.config || {});

        return opts;
    },
    updateCode: function(){
        // TODO: make scroll position maintain
        this.cm.setValue(this.props.code);
    },
    codeChanged: function(cm){
        // set a flag so this doesn't cause a cm.setValue
        this.userChangedCode = true;
        this.props.onChange && this.props.onChange(cm.getValue());
    },

    // standard lifecycle methods
    componentDidMount: function(el) {
        // bind CodeMirror
        window.cm = this.cm = CM(el, this.getOptions());
        bindTern(this.cm);
        this.cm.on("change", this.codeChanged);
        this.updateCode();
    },
    componentDidUpdate: function(){
        this.updateCode();
    },
    componentWillUnmount: function(){
        this.cm.off("change", this.codeChanged);
    },
    render: function() {
        return (<div />);
    },
    shouldComponentUpdate: function(nextProps){
        if (this.userChangedCode) {
            this.userChangedCode = false;
            return false;
        }

        return nextProps.code !== this.props.code;
    }
});

module.exports = CodeMirrorComponent;

function getURL(url, c) {
    var xhr = new XMLHttpRequest();
    xhr.open("get", url, true);
    xhr.send();
    xhr.onreadystatechange = function () {
        if (xhr.readyState != 4) {
            return;
        }
        if (xhr.status < 400) {
            return c(null, xhr.responseText);
        }
        var e = new Error(xhr.responseText || "No response");
        e.status = xhr.status;
        c(e);
    };
}

var ternServer, callback;
getURL("http://ternjs.net/defs/ecma5.json", function (err, code) {
    if (err) {
        throw new Error("Request for ecma5.json: " + err);
    }
    ternServer = new CodeMirror.TernServer({
        defs: [JSON.parse(code)]
    });

    if (callback) {
        callback();
    }
});

function bindTern(cm){
    var bind = function(){
        cm.setOption("extraKeys", {
            "Ctrl-Space": function (cm) {
                ternServer.complete(cm);
            },
                "Ctrl-I": function (cm) {
                ternServer.showType(cm);
            },
                "Alt-.": function (cm) {
                ternServer.jumpToDef(cm);
            },
                "Alt-,": function (cm) {
                ternServer.jumpBack(cm);
            },
                "Ctrl-Q": function (cm) {
                ternServer.rename(cm);
            },
        })
        cm.on("cursorActivity", function (cm) {
            ternServer.updateArgHints(cm);
        });
    };

    if (ternServer) {
        bind();
    }
    else {
        var otherCallback = callback || function(){};

        // tack on our bind function to the callback
        callback = (function(){
            otherCallback(); bind(); 
        });
    }
}

function extend(obj, src){
  var own = {}.hasOwnProperty;
  for (var key in src) if (own.call(src, key)) obj[key] = src[key];
  return obj;
}
