/** @jsx React.DOM */

var Split = require("./common/split.jsx");
var Accordion = require("./common/accordion.jsx");

var Application = React.createClass({
    getInitialState: function() {
        return {};
    },
    componentDidMount: function() {

    },

    render: function() {
        return (
            <Split>
                <div>
                    <Accordion title="Foo">
                        bar
                    </Accordion>

                    <Accordion title="Foo">
                        bar
                    </Accordion>
                    
                    <Accordion title="Foo">
                        bar
                    </Accordion>
                </div>
                <div />
                <div />
            </Split>
        );
    }
});

module.exports = Application;

