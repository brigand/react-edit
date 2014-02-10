/** @jsx React.DOM */
var Application = require('./jsx/application.jsx');


var defaultData = {
    components: [
        {
            "name": "App",
            "methods": {
                render: "function(){}"
            },
            "depends": []
        }
    ],
    settings: {

    },
    activeComponent: ""
}

var cortex = new Cortex(defaultData, function(updatedData, a,c) {
  app.setProps({data: updatedData});
});

var app = window.app = <Application data={cortex}/>;

React.renderComponent(
    app,
    document.getElementById('application')
);
