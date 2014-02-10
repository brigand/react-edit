var ComponentSettings = React.createClass({
    mixins: [require("../../util/CortexMixin")],
    getInitialState: function(){
        return {dependsValue: ""};
    },
    render: function(){
        var component = this.props.component;
        var depends = component.get("depends");

        if (!component) {
            return (<div>woops, something is wrong here</div>);
        }

        var name = component.get("name");

        return (
            <div>
                <label>
                    Name:
                    <input value={name.getValue()} onChange={this.handleNameChange}/>
                </label>
                <label>
                    Depends:
                    <input value={this.state.dependsValue} 
                        onChange={this.handleDependsValueChange} onKeyPress={this.handleDependsSubmit} />

                    </label>
                    <Depends depends={depends} />

                    <div className="delete">
                        delete component

                        <span className="x">X</span>
                    </div>
            </div>
        );
    },
    handleNameChange: function(event){
        this.props.component.get("name").set(event.target.value);
        this.props.active.set(event.target.value);
    },
    handleDependsValueChange: function(event){
        this.setState({dependsValue: event.target.value});
    },
    handleDependsSubmit: function(event){
        if (event.which === 13) {
            var component = this.props.component;
            var depends = component.get("depends");
            var input = event.target.value;

            depends.push({
                name: input,
                alias: input.replace(/\W+/, "")
            });

            // clear the input
            this.setState({dependsValue: ""});
        }
    }
});

function Depends(props){
    return props.depends.map(function(depend, index){
                        var remove = function(){
                            depends.removeAt(index);
                        };

                        var alias = depend.get("alias");
                        var setAlias = function(event){
                            alias.set(event.target.value.replace(/\W+/g, ""));
                        };

                        return (
                            <div className="depend">
                                {depend.get("name").getValue()} with alias 
                                    <input value={alias.getValue()} onChange={setAlias} /> 
                                    <span className="x" onClick={remove}>X</span>
                            </div>);
                    })
}


module.exports = ComponentSettings;