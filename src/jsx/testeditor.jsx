/** @jsx React.DOM */

var CodeMirror = require("./common/codemirror.jsx");
var Split = require("./common/split.jsx");

var TestEditor = React.createClass({
    getInitialState: function() {
        return {code: "function foo(){\n    var a = 5;\n}\n"};
    },
    componentDidMount: function() {

    },
    codeChange: function(code){
        this.setState({code: code});
    },
    render: function() {
        return (
            <div>
                <Split>
                    <CodeMirror code={this.state.code} onChange={this.codeChange} />
                    <CodeMirror code="zam" />
                </Split>
            </div>

        );
    },
    quux: function(){
        this.setState({code: "quux"})
    }
});

module.exports = TestEditor;

