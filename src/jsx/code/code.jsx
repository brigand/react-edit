var Accordion = require("../common/accordion.jsx");
var CodeMirror = require("../common/CodeMirror.jsx");


var Code = React.createClass({
    render: function(){
        var component = this.props.component;
        if (!component) {
            return (<div>Click on a component to start editing!</div>);
        }

        var items = [];

        component.get("methods").forEach(function(key, value){
            var id = component.get("name").getValue + "-" + key;
            items.push( 
                <Accordion key={id} title={key} defaultOpen={true}>
                    <CodeMirror code={value.getValue()} onChange={value.set.bind(value)} />
                </Accordion>
            );
        });

        return <div>{items}</div>
    }
});

module.exports = Code;