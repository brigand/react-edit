/** @jsx React.DOM */
var Application = require('./jsx/application.jsx');

var app = window.app = <Application />;

React.renderComponent(
    app,
    document.getElementById('application')
);
