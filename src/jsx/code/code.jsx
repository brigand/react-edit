var Accordion = require("../common/accordion.jsx");
var CodeMirror = require("../common/CodeMirror.jsx");
var Welcome = require("./welcome.jsx")

var Code = React.createClass({
    render: function(){
        var component = this.props.component;
        if (!component) {
            return (<Welcome />);
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
                <Accordion key={id} title={key} defaultOpen={value.get("defaultOpen").getValue()}>
                    <input value={args.getValue()} onChange={updateArgs} placeholder="...args" className="args" />
                    <CodeMirror code={code.getValue()} onChange={code.set.bind(code)} />
                </Accordion>
            );
        });

        return <div className="re-code">{items}</div>
    }
});

module.exports = Code;