/** @jsx React.DOM */
var Application = require('./jsx/application.jsx');
var Parse = require("./api/parse");
var getDefaultMethods = require("./api/getDefaultMethods");


var defaultData = {
    components: [
        {
            "name": "App",
            "methods": getDefaultMethods(),
            "depends": []
        },
        {
            "name": "Common",
            "methods": {
                "render": {
                    code: "// put reusable code in \n// submodules of Common",
                    args: "",
                    defaultOpen: true
                }
            },
            "depends": []
        }
    ],
    settings: {

    },
    activeComponent: ""
};

function maybeLoadRemote(){
    if (window.location.hash.length === 7) {
        Parse.get(window.location.hash.slice(2))
            .then(function(snap){
                console.log(snap);
                var data = snap.get('data');
                cortex.set(data);
            });
    }
}

maybeLoadRemote();
window.addEventListener("hashchange", maybeLoadRemote, false);

var cortex = new Cortex(defaultData, function(updatedData, a,c) {
  app.setProps({data: updatedData});
});

Parse.setCortex(cortex);

var app = window.app = <Application data={cortex}/>;

React.renderComponent(
    app,
    document.getElementById('application')
);
