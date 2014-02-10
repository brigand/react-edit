function generate(data){
    console.log(data);
    var modules = data.components.map(processModule);

    var jsx = templates.jsxbanner + "\n" + modules.join("\n\n");
    var javascript = JSXTransformer.transform(jsx).code;    

    var html = insert(templates.html, {
        javascript: javascript
    });

    console.log(html)

    return html;
}
module.exports = generate;

// take a module and 
function processModule(data){
    var methods = []; 
    objectForEach(data.methods, function(name, code){
        console.log(name, code);
        methods.push(wrap.method(name, code));
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
    method: function(name, code){
        var lines = code.split("\n");
        var first = lines[0];
        var others = indent(1, code);

        return insert("$name$: $code$", {
            name: name,
            code: others.trim(),
            others:others.trim()
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
    html: fs.readFileSync(__dirname + "/templates/html.tpl.html"),
    jsxbanner: "/** @jsx React.DOM */"
};