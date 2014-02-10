/** @jsx React.DOM */

var Split = require("./common/split.jsx");
var Menu = require("./menu/menu.jsx");

var Application = React.createClass({
    getInitialState: function() {
        return {};
    },
    componentDidMount: function() {

    },

    render: function() {
        return (
            <Split>
                <Menu data={this.props.data} />
                <div />
                <div />
            </Split>
        );
    }
});

module.exports = Application;

