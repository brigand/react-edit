var Accordion = require("../common/accordion.jsx");
var CodeMirror = require("../common/CodeMirror.jsx");


var Code = React.createClass({
    mixins: [require("../../util/CortexMixin")],
    render: function(){
        var component = this.props.component;
        if (!component) {
            return (<div>Click on a component to start editing!</div>);
        }

        var items = [];

        component.get("methods").forEach(function(key, value){
            items.push( 
                <Accordion key={key} title={key} defaultOpen={true}>
                    <CodeMirror code={value.getValue()} onChange={value.set.bind(value)} />
                </Accordion>
            );
        })
/*
        component.forEach(function(key, value){
            console.log(k);
            items.push( <div>{key}</div> );
        })*/

        return <div>{items}</div>
    }
});

module.exports = Code;