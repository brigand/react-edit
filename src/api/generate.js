function generate(data){
    console.log(data);
    return Math.random();
}
module.exports = generate;

// take a module and 
function processModule(data){

}

function indent(count, code){
    var fn = function(code){

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

var fs = require("fs");
var templates = {
    html: fs.readFileSync(__dirname + "/templates/html.tpl.html")
};