/** @jsx React.DOM */
var Accordion = React.createClass({
    getInitialState: function() {
        return {show: !!this.props.defaultOpen};
    },
    toggleBody: function(){
        this.setState({show: !this.state.show});
    },
    render: function() {
        return (
            <div className={"accordion-component " + (this.props.className || "")}>
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

