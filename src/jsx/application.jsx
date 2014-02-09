/** @jsx React.DOM */

var test = require("./testeditor.jsx");

var Application = React.createClass({
    getInitialState: function() {
        return {};
    },
    componentDidMount: function() {

    },

    render: function() {
        return (
            <test />
        );
    }
});

module.exports = Application;

