
function ComponentItemList(props){
    return props.components.map(function(it){ return it.getValue().name })
        .sort()
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

module.exports = ComponentItemList;