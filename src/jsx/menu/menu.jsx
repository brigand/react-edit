/** @jsx React.DOM */

var Accordion = require("../common/accordion.jsx");
var ComponentItemList = require("./component-list.jsx");
var ComponentSettings = require("./component-settings.jsx");

var Menu = React.createClass({
    render: function(){
        var data = this.props.data;
        var active = data.get("activeComponent"), activeValue = active.getValue();
        var components = data.get("components");

        return(
            <div className="re-menu">
                <Accordion title="Settings" defaultOpen={true}>
                    bar
                </Accordion>

                <Accordion title="Components" className="components" defaultOpen={true}>
                    <ComponentItemList components={components} active={active} />
                    <button className="success" onClick={this.addComponent}>new</button>
                </Accordion>
                { activeValue && 
                    <Accordion title={activeValue} defaultOpen={true}>
                        <ComponentSettings component={this.getActiveComponent()} active={active} />
                    </Accordion>}
            </div>);
    },
    addComponent: function(){
        var data = this.props.data;
        var active = data.get("activeComponent"), activeValue = active.getValue();
        var components = data.get("components");

        var rwords = "Ain,Blar,Cin,Das,Eog,Fiz,Guj,Hab,Ien,Jia,Kop,Lun,Mel,Ner,Omp,Pik,Qub,Rel,Sug,Ter,Und,Ven,Wex,Xul,Yat,Zep".split(",");
        var nameSuffix = "";
        while(nameSuffix.length < 9) {
            nameSuffix += rwords[Math.floor(Math.random() * rwords.length)];
        }

        var name = activeValue ? activeValue + "." + nameSuffix : nameSuffix;

        var obj = {
            name: name,
            depends: [],
            methods: {render: "function(){\n    return (<div />);\n}\n"}
        };

        components.push(obj);
        active.set(name);
    },
    getActiveComponent: function(){
        var nameIs = function(name){
            return function(x){
                return name === (x.getValue ? x.getValue().name : x.name);
            }
        };

        var data = this.props.data;
        var active = data.get("activeComponent"), activeValue = active.getValue();
        var components = data.get("components");
        return components.find(nameIs(activeValue));
    }
});


module.exports = Menu;