/** @jsx React.DOM */
var Application = require('./jsx/application.jsx');


var defaultData = {
    components: {
        "FooBar": {},
        "Foo.Bar.Quux.Baz": {},
        "Foo.Bar": {},
        "Foo.Bar.Baz": {},
        "Foo": {},
        "Foo.Baz": {}
    },
    settings: {

    },
    activeComponent: ""
}

var cortex = new Cortex(defaultData, function(updatedData) {
  app.setProps({data: updatedData});
});

var app = window.app = <Application data={cortex}/>;

React.renderComponent(
    app,
    document.getElementById('application')
);
