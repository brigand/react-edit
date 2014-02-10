var ComponentSettings = React.createClass({
    mixins: [require("../../util/CortexMixin")],
    handleNameChange: function(event){
        this.props.component.get("name").set(event.target.value);
        this.props.active.set(event.target.value);
    },
    render: function(){
        var component = this.props.component;

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
                    
                </label>
            </div>
        );
    }
});

module.exports = ComponentSettings;