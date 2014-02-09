/** @jsx React.DOM */
var Accordion = React.createClass({
    getInitialState: function() {
        return {show: false};
    },
    toggleBody: function(){
        this.setState({show: !this.state.show});
    },
    render: function() {
        return (
            <div className="accordion-component">
                <button className="expand" 
                    onClick={this.toggleBody}>{this.props.title || " "}</button>
                <div className={this.state.show ? "body show" : "body hide"}>
                    {this.props.children}
                </div>
            </div>
        );
    }
});

module.exports = Accordion;

