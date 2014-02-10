/** @jsx React.DOM */

var Split = require("./common/split.jsx");
var Menu = require("./menu/menu.jsx");
var Code = require("./code/code.jsx");
var Preview = require("./preview/preview.jsx");

var Application = React.createClass({
    render: function() {
        return (
            <Split>
                <Menu data={this.props.data} />
                <Code component={this.getActiveComponent()} />
                <Preview data={this.props.data} />
            </Split>
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

