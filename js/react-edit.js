require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

},{}],2:[function(require,module,exports){
function generate(data){
    console.log(data);
    var modules = data.components.map(processModule);

    var jsx = templates.jsxbanner + "\n" + modules.join("\n\n");
    try {
        var javascript = JSXTransformer.transform(jsx).code;    
    }
    catch (e) {
        return "<pre style='color: #702'>" 
            + "<h3>Error processing the files</h3>"
            + JSON.stringify(e, null, 4) 
            + "</pre>";
    }

    var html = insert(templates.html, {
        javascript: javascript
    });

    return html;
}
module.exports = generate;

// take a module and 
function processModule(data){
    var methods = []; 
    objectForEach(data.methods, function(name, method){
        methods.push(wrap.method(name, method));
    });

    var cc = wrap.createClass(data.name, methods.join(",\n\n"));
    var set = wrap.set(data.name, cc);
    var get = wrap.get(data.depends, set);

    return get;
}

var wrap = {
    createClass: function(name, code){
        return insert("React.createClass({displayName: '$name$',\n$code$\n    })", {
            name: name,
            code: indent(2, code)
        });
    },
    get: function(depends, code){
        if (depends.length === 0) return code;
        var names = JSON.stringify(depends.map(function(it){ return it.name }));
        var aliases = depends.map(function(it){ 
            return it.alias || it.name.replace(/\W+/, "")
        }).join(", ");

        var getTemplate = "dep.get($names$, function($aliases$){\n"
            +  "$code$\n"
            + "});\n";

        return insert(getTemplate, {
            names: names,
            aliases: aliases,
            code: indent(1, code.trim())
        });
    },
    set: function(name, code){
        return insert("dep.set('$name$', $code$\n);", {
            name: name,
            code: code
        });
    },
    method: function(name, method){
        var code = indent(1, method.code);

        return insert("$name$: function($args$){ \n$code$\n}", {
            name: name,
            code: code.trim(),
            args: method.args
        })
    }
}

function indent(count, code){
    var fn = function(code){
        return spaces + code.trim().split("\n").join("\n" + spaces)
    };

    var spaces = "";
    while (spaces.length < count * 2) {
        spaces += "  ";
    }

    if (arguments.length > 1) {
        return fn(code);
    }
    else {
        return fn;
    }
}

function insert(template, mapping) {
    // if mapping is left out, allow partial application
    if (!mapping) {
        return insert.bind(null, template)
    }

    var has = Object.prototype.hasOwnProperty;

    // replace all upper case parts of the template
    // with the values from mapping
    return template.replace(/\$(\w+)\$/g, function(all, match){
        if (has.call(mapping, match)){
            return mapping[match];
        }
        else {
            return all;
        }
    });
}

function objectForEach(obj, fn){
    var k, own$ = {}.hasOwnProperty;
    for (k in obj) if (own$.call(obj, k)) {
      fn(k, obj[k]);
    }
}

var fs = require("fs");
var templates = {
    html: "<!doctype html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"utf-8\">\n\n  <title>$name$</title>\n</head>\n<div id=\"application\"></div>\n<body>\n  <script src=\"/js/vendor/react.min.js\"></script>\n  <script src=\"/js/vendor/cortex.js\"></script>\n  <script>\n var dep={set:function(i,t){this._modules[i]=t,this._waiting[i]&&this._waiting[i].forEach(function(i){i()})},get:function(i,t){var n=i.length,e=[],l=this._modules,s=this._waiting,h=function(){0===n&&t.apply(null,e)};i.forEach(function(i,t){if(l[i])e[t]=l[i],n--,h();else{var o=s[i]=s[i]||[],u=o.length;o.push(function(){e[t]=l[i],n--,1===o.length?delete s[i]:o.splice(u,1),h()})}})},_modules:{},_waiting:{}}\n  </script>\n  <script>\n$javascript$\n\ndep.get([\"App\"], function(App){\n    React.renderComponent(\n        App(null),\n        document.getElementById('application')\n    );\n});\n  </script>\n</body>\n</html>",
    jsxbanner: "/** @jsx React.DOM */"
};
},{"fs":1}],3:[function(require,module,exports){
function method(code, args, defaultOpen){
    return {
        code: (code || "") + "\n\n",
        args: args || "",
        defaultOpen: defaultOpen || false,
        isDefault: true
    }
}

function getDefaultMethods(){
    return {
        // most components use a few of these
        render: method("return <div />", "", true),
        componentDidMount: method("", "rootNode", true),
        componentWillUnmount: method("var rootNode = this.getDOMElement();", "", true),
        getInitialState: method("return {}", "", true),
        shouldComponentUpdate: method("", "nextProps, nextState"),

        // less frequently used
        componentWillReceiveProps: method("", "nextProps"),
        componentWillMount: method(),
        
        // not sure how to use these
        componentWillUpdate: method(),
        componentDidUpdate: method(),
    };
}

module.exports = getDefaultMethods;
},{}],4:[function(require,module,exports){

var Snapshot = Parse.Object.extend("Snapshot");


var cortex;
function save(){
    var snap = new Snapshot();
    snap.set("data", cortex.getValue());
    return snap.save().then(function(snap){
        window.snap = snap;
        window.location.hash = "#/" + snap.get("hash");
    });
}


function get(hash){
    var query = new Parse.Query(Snapshot);
    query.equalTo("hash", hash);
    return query.first();
}

function setCortex(_cortex) {
    cortex = _cortex;
}

module.exports = {
    save: save,
    get: get,
    setCortex: setCortex
}
},{}],5:[function(require,module,exports){
/** @jsx React.DOM */
var Application = require('./jsx/application.jsx');
var Parse = require("./api/parse");
var getDefaultMethods = require("./api/getDefaultMethods");


var defaultData = {
    components: [
        {
            "name": "App",
            "methods": getDefaultMethods(),
            "depends": []
        },
        {
            "name": "Common",
            "methods": {
                "render": {
                    code: "// put reusable code in \n// submodules of Common",
                    args: "",
                    defaultOpen: true
                }
            },
            "depends": []
        }
    ],
    settings: {

    },
    activeComponent: ""
};

function maybeLoadRemote(){
    if (window.location.hash.length === 7) {
        Parse.get(window.location.hash.slice(2))
            .then(function(snap){
                console.log(snap);
                var data = snap.get('data');
                cortex.set(data);
            });
    }
}

maybeLoadRemote();
window.addEventListener("hashchange", maybeLoadRemote, false);

var cortex = new Cortex(defaultData, function(updatedData, a,c) {
  app.setProps({data: updatedData});
});

Parse.setCortex(cortex);

var app = window.app = Application( {data:cortex});

React.renderComponent(
    app,
    document.getElementById('application')
);

},{"./api/getDefaultMethods":3,"./api/parse":4,"./jsx/application.jsx":6}],6:[function(require,module,exports){
/** @jsx React.DOM */

var Split = require("./common/split.jsx");
var Menu = require("./menu/menu.jsx");
var Code = require("./code/code.jsx");
var Preview = require("./preview/preview.jsx");

var Application = React.createClass({displayName: 'Application',
    render: function() {
        return (
            Split(null, 
                Menu( {data:this.props.data} ),
                Code( {component:this.getActiveComponent()} ),
                Preview( {data:this.props.data} )
            )
        );
    },

    getActiveComponent: function(){
        var nameIs = function(name){
            return function(x){
                return name === (x.getValue ? x.getValue().name : x.name);
            }
        };

        var data = this.props.data;
        var active = data.get("activeComponent"), activeValue = active.getValue();
        var components = data.get("components");
        return components.find(nameIs(activeValue));
    }
});

module.exports = Application;


},{"./code/code.jsx":7,"./common/split.jsx":"dTPj4o","./menu/menu.jsx":18,"./preview/preview.jsx":19}],7:[function(require,module,exports){
/** @jsx React.DOM */var Accordion = require("../common/accordion.jsx");
var CodeMirror = require("../common/CodeMirror.jsx");
var Welcome = require("./welcome.jsx")

var Code = React.createClass({displayName: 'Code',
    render: function(){
        var component = this.props.component;
        if (!component) {
            return (Welcome(null ));
        }

        var items = [];

        component.get("methods").forEach(function(key, value){
            var id = component.get("name").getValue() + "-" + key;
            console.log(id);

            var code = value.get("code");
            var args = value.get("args");
            var updateArgs = function(e){
                args.set(e.target.value)
            }

            items.push( 
                Accordion( {key:id, title:key, defaultOpen:value.get("defaultOpen").getValue()}, 
                    React.DOM.input( {value:args.getValue(), onChange:updateArgs, placeholder:"...args", className:"args"} ),
                    CodeMirror( {code:code.getValue(), onChange:code.set.bind(code)} )
                )
            );
        });

        return React.DOM.div( {className:"re-code"}, items)
    }
});

module.exports = Code;
},{"../common/CodeMirror.jsx":9,"../common/accordion.jsx":"PSgpg7","./welcome.jsx":8}],8:[function(require,module,exports){
/** @jsx React.DOM */var Welcome = function(){
    return (
    React.DOM.div(null, 
        React.DOM.h2(null, "Click on a component to start editing!"),
        React.DOM.ul(null, 
            React.DOM.li(null, "the big green 'New' button creates a sub module"),
            React.DOM.li(null, "App is the main entry point"),
            React.DOM.li(null, "Press 'Save' to get a permalink to your creation"),
            React.DOM.li(null, "(this project is new, help " ,
                React.DOM.a( {href:"https://github.com/brigand/react-edit"}, "work out the kinks on GitHub)"))
        )
    ));
}

module.exports = Welcome;
},{}],9:[function(require,module,exports){
/** @jsx React.DOM */
var CM = window.CodeMirror;
var CodeMirrorComponent = React.createClass({displayName: 'CodeMirrorComponent',

    // interesting stuff
    getOptions: function(){
        var opts = extend({
            mode: "javascript",
            lineNumbers: true,
            theme: "ambiance",
            viewportMargin: Infinity
        }, this.props.config || {});

        console.log(opts);
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
        return (React.DOM.div(null ));
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
            console.log("cb")
            otherCallback(); bind(); 
        });
    }
}

function extend(obj, src){
  var own = {}.hasOwnProperty;
  for (var key in src) if (own.call(src, key)) obj[key] = src[key];
  return obj;
}

},{}],"PSgpg7":[function(require,module,exports){
/** @jsx React.DOM */
var Accordion = React.createClass({displayName: 'Accordion',
    getInitialState: function() {
        return {show: !!this.props.defaultOpen};
    },
    toggleBody: function(){
        this.setState({show: !this.state.show});
    },
    render: function() {
        return (
            React.DOM.div( {className:"accordion-component " + (this.props.className || "")}, 
                React.DOM.button( {className:"expand",
                    onClick:this.toggleBody}, this.props.title || " "),
                React.DOM.div( {className:this.state.show ? "body show" : "body hide"}, 
                    this.props.children
                )
            )
        );
    }
});

module.exports = Accordion;


},{}],"common/src/jsx/common/accordion":[function(require,module,exports){
module.exports=require('PSgpg7');
},{}],"common/src/jsx/common/codemirror":[function(require,module,exports){
module.exports=require('2DbuzG');
},{}],"2DbuzG":[function(require,module,exports){
module.exports=require(9)
},{}],"dTPj4o":[function(require,module,exports){
/** @jsx React.DOM */

var Divider = React.createClass({displayName: 'Divider',
    getInitialState: function(){
        return {percent: 1 / this.props.count};
    },
    dragStart: function(e){
        this.isDragging = true;
        e.preventDefault();
    },
    dragUpdate: function(e){
        if (!this.isDragging) {
            return;
        }

        e.preventDefault();

        // calculate the position of the cursor relative to the container
        var element = this.getDOMNode();
        var parentBounds = element.parentNode.getBoundingClientRect();
        var parentWidth = parentBounds.right - parentBounds.left;
        var percentAcrossContainer = (e.pageX - parentBounds.left) / parentWidth;

        // determine the offset of our current element relative to the parent
        var affected = element.previousSibling;
        var affectedLeft = affected.getBoundingClientRect().left;
        var affectedOffsetPercent = affectedLeft / parentWidth;

        // calculate the percent width
        var percent = percentAcrossContainer - affectedOffsetPercent;

        //set a 10% minimum
        percent = Math.max(percent, 0.10);

        // and a 90% max
        percent = Math.min(percent, 0.9);
        this.setState({percent: percent}, this.applyPosition);
    },
    applyPosition: function(){
        var affected = this.getDOMNode().previousSibling;
        affected.style.width = (this.state.percent * 100) + "%";
    },
    dragEnd: function(e){
        this.isDragging = false;
    },
    componentDidMount: function(){
        window.addEventListener("mousemove", this.dragUpdate, false);
        window.addEventListener("mouseup", this.dragEnd, false);
        this.applyPosition();
    },
    componentWillUnmount: function(){
        window.removeEventListener("mousemove", this.dragUpdate);
        window.removeEventListener("mouseup", this.dragEnd);
    },
    render: function() {
        return (
            React.DOM.div( {className:"divider", 
                onMouseDown:this.dragStart} )
        );
    }
});


var Split = React.createClass({displayName: 'Split',
    getInitialState: function() {
        return {};
    },
    render: function() {
        var insertDivider = function(nodes, node, index, array) {
            if (index === array.length - 1) {
                return nodes.concat([node]);
            }
            else {
                return nodes.concat([node, Divider( {key:index, count:array.length} )]);
            }
        }.bind(this);

        return (
            React.DOM.div( {className:this.props.className || "split-component"}, 
                this.props.children.reduce(insertDivider, [])
            )
        );
    }
});

module.exports = Split;


},{}],"common/src/jsx/common/split":[function(require,module,exports){
module.exports=require('dTPj4o');
},{}],16:[function(require,module,exports){
/** @jsx React.DOM */function ComponentItemList(props){
    return props.components.map(function(it){ return it.getValue().name })
        .sort()
        .map(function(key){
            var setFocused = function(){
                props.active.set(key);
            };
            return ComponentItem( {name:key, onClick:setFocused} )
        });
}

function ComponentItem(props){
    var parts = props.name.split(".");
    var last = parts[parts.length - 1];
    var indents = [];

    while (indents.length < parts.length - 1) {
        indents.push(React.DOM.span( {className:"indent"}));
    }

    return (
        React.DOM.div( {key:props.name, className:"component-item", onClick:props.onClick}, 
            parts.length === 1 && React.DOM.div( {className:"spacer"} ), 
            indents, last
        )
    );
}

module.exports = ComponentItemList;
},{}],17:[function(require,module,exports){
/** @jsx React.DOM */var ComponentSettings = React.createClass({displayName: 'ComponentSettings',
    mixins: [require("../../util/CortexMixin")],
    getInitialState: function(){
        return {dependsValue: ""};
    },
    render: function(){
        var component = this.props.component;
        var depends = component.get("depends");

        if (!component) {
            return (React.DOM.div(null, "woops, something is wrong here"));
        }

        var name = component.get("name");

        return (
            React.DOM.div(null, 
                React.DOM.label(null, 
                    " Name: ",
                    React.DOM.input( {value:name.getValue(), onChange:this.handleNameChange})
                ),
                React.DOM.label(null, 
                    " Depends: ",
                    React.DOM.input( {value:this.state.dependsValue, 
                        onChange:this.handleDependsValueChange, onKeyPress:this.handleDependsSubmit} )

                    ),
                    Depends( {depends:depends} ),

                    React.DOM.div( {className:"delete"}, 
                        " delete component ",
                        React.DOM.span( {className:"x"}, "X")
                    )
            )
        );
    },
    handleNameChange: function(event){
        this.props.component.get("name").set(event.target.value);
        this.props.active.set(event.target.value);
    },
    handleDependsValueChange: function(event){
        this.setState({dependsValue: event.target.value});
    },
    handleDependsSubmit: function(event){
        if (event.which === 13) {
            var component = this.props.component;
            var depends = component.get("depends");
            var input = event.target.value;

            depends.push({
                name: input,
                alias: input.replace(/\W+/, "")
            });

            // clear the input
            this.setState({dependsValue: ""});
        }
    }
});

function Depends(props){
    return props.depends.map(function(depend, index){
                        var remove = function(){
                            depends.removeAt(index);
                        };

                        var alias = depend.get("alias");
                        var setAlias = function(event){
                            alias.set(event.target.value.replace(/\W+/g, ""));
                        };

                        return (
                            React.DOM.div( {className:"depend"}, 
                                depend.get("name").getValue(), " with alias " ,
                                    React.DOM.input( {value:alias.getValue(), onChange:setAlias} ), 
                                    React.DOM.span( {className:"x", onClick:remove}, "X")
                            ));
                    })
}


module.exports = ComponentSettings;
},{"../../util/CortexMixin":20}],18:[function(require,module,exports){
/** @jsx React.DOM */

var Accordion = require("../common/accordion.jsx");
var ComponentItemList = require("./component-list.jsx");
var ComponentSettings = require("./component-settings.jsx");
var Parse = require("../../api/parse");
var getDefaultMethods = require("../../api/getDefaultMethods");

var Menu = React.createClass({displayName: 'Menu',
    render: function(){
        var data = this.props.data;
        var active = data.get("activeComponent"), activeValue = active.getValue();
        var components = data.get("components");

        return(
            React.DOM.div( {className:"re-menu"}, 
                Accordion( {title:"Settings", defaultOpen:true}, 
                    React.DOM.button( {onClick:Parse.save}, "Save")
                ),

                Accordion( {title:"Components", className:"components", defaultOpen:true}, 
                    ComponentItemList( {components:components, active:active} ),
                    React.DOM.button( {className:"success", onClick:this.addComponent}, "new")
                ),
                 activeValue && 
                    Accordion( {title:activeValue, defaultOpen:true}, 
                        ComponentSettings( {component:this.getActiveComponent(), active:active} )
                    )
            ));
    },
    addComponent: function(){
        var data = this.props.data;
        var active = data.get("activeComponent"), activeValue = active.getValue();
        var components = data.get("components");

        var rwords = "Ain,Blar,Cin,Das,Eog,Fiz,Guj,Hab,Ien,Jia,Kop,Lun,Mel,Ner,Omp,Pik,Qub,Rel,Sug,Ter,Und,Ven,Wex,Xul,Yat,Zep".split(",");
        var nameSuffix = "";
        while(nameSuffix.length < 9) {
            nameSuffix += rwords[Math.floor(Math.random() * rwords.length)];
        }

        var name = activeValue ? activeValue + "." + nameSuffix : nameSuffix;

        var obj = {
            name: name,
            depends: [],
            methods: getDefaultMethods()
        };

        components.push(obj);
        active.set(name);
    },
    getActiveComponent: function(){
        var nameIs = function(name){
            return function(x){
                return name === (x.getValue ? x.getValue().name : x.name);
            }
        };

        var data = this.props.data;
        var active = data.get("activeComponent"), activeValue = active.getValue();
        var components = data.get("components");
        return components.find(nameIs(activeValue));
    }
});


module.exports = Menu;
},{"../../api/getDefaultMethods":3,"../../api/parse":4,"../common/accordion.jsx":"PSgpg7","./component-list.jsx":16,"./component-settings.jsx":17}],19:[function(require,module,exports){
/** @jsx React.DOM */var generate = require("../../api/generate");

var Preview = React.createClass({displayName: 'Preview',
    render: function(){
        return (
                React.DOM.div( {className:"re-preview"}, 
                    IFrame( {srcDoc:generate(this.props.data.value)} )
                )
        );
    }
});

var IFrame = React.createClass({displayName: 'IFrame',
    render: function() {
        return React.DOM.iframe(this.props);
    },
    componentDidMount: function() {
        if (this.props.srcDoc != null) {
            this.getDOMNode().srcdoc = this.props.srcDoc;
        }
    },
    componentDidUpdate: function(prevProps, prevState) {
        if (prevProps.srcDoc !== this.props.srcDoc) {
            this.getDOMNode().srcdoc = this.props.srcDoc;
        }
    }
});

module.exports = Preview;
},{"../../api/generate":2}],20:[function(require,module,exports){
var CortexMixin = {
    get: function(what){
        return what.getValue ? what.getValue() : what;
    },
    set: function(what){
        return function(value){
            if (value && value.target && value.target.value != null) {
                value = value.target.value;
            }

            if (what.set) {
                what.set(value);
            }
        };
    }
};

module.exports = CortexMixin;
},{}]},{},[5])