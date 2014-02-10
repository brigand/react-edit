/** @jsx React.DOM */

var Accordion = require("../common/accordion.jsx");

var Menu = React.createClass({
    render: function(){
        var data = this.props.data;
        var active = data.get("activeComponent"), activeValue = active.getValue();
        var components = data.get("components");
        console.log(activeValue)
        return(
            <div className="re-menu">
                <Accordion title="Settings" defaultOpen={true}>
                    bar
                </Accordion>

                <Accordion title="Components" className="components" defaultOpen={true}>
                    <ComponentItemList keys={components.keys()} active={active} />
                    <button className="success">new</button>
                </Accordion>
                { activeValue && 
                    <Accordion title={active.getValue()}>
                        {JSON.stringify(components.get(activeValue).getValue())}
                    </Accordion>}
            </div>);
    }
});

function ComponentItemList(props){
    return props.keys.map(function(it){ return it })
        .sort(function(a, b){
            var ap = a.split("."), bp = b.split("."), len = Math.min(ap.length, bp.length);

            for (var i=0; i<len; i++){
                var ai = ap[i], bi = bp[i];

                if (ai < bi) return -1;
                if (bi < ai) return 1;
            }

            if (ap.length > bp.length) {
                return 1;
            }
            if (bp.length < ap.length) {
                return -1;
            }
        })
        .map(function(key){
            var setFocused = function(){
                props.active.set(key);
            };
            return <ComponentItem name={key} onClick={setFocused} />
        });
}

function ComponentItem(props){
    var parts = props.name.split(".");
    var last = parts[parts.length - 1];
    var indents = [];

    while (indents.length < parts.length - 1) {
        indents.push(<span className="indent"></span>);
    }

    return (
        <div key={props.name} className="component-item" onClick={props.onClick}>
            {parts.length === 1 && <div className="spacer" />} 
            {indents} {last}
        </div>
    );
}

module.exports = Menu;