var generate = require("../../api/generate");

var Preview = React.createClass({
    render: function(){
        return (
                <div className="re-preview">
                    <IFrame srcDoc={generate(this.props.data.value)} />
                </div>
        );
    }
});

var IFrame = React.createClass({
    render: function() {
        return React.DOM.iframe(this.props);
    },
    componentDidMount: function() {
        if (this.props.srcDoc != null) {
            this.getDOMNode().srcdoc = this.props.srcDoc;
        }
    },
    componentDidUpdate: function(prevProps, prevState) {
        if (prevProps.srcDoc !== this.props.srcDoc) {
            this.getDOMNode().srcdoc = this.props.srcDoc;
        }
    }
});

module.exports = Preview;