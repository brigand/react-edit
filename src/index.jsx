/** @jsx React.DOM */
var Application = require('./jsx/application.jsx');


var defaultData = {
    components: [
        {
            "name": "FooBar",
            "methods": {},
            "depends": []
        },
        {
            "name": "Foo.Bar.Quux.Baz",
            "methods": {},
            "depends": []
        },
        {
            "name": "Foo.Bar",
            "methods": {},
            "depends": []
        },
        {
            "name": "Foo.Bar.Baz",
            "methods": {},
            "depends": []
        },
        {
            "name": "Foo",
            "methods": {},
            "depends": []
        },
        {
            "name": "Foo.Baz",
            "methods": {},
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
