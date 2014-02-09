/** @jsx React.DOM */

var Divider = React.createClass({
    getInitialState: function(){
        return {percent: 1 / this.props.count};
    },
    dragStart: function(e){
        this.isDragging = true;
    },
    dragUpdate: function(e){
        if (!this.isDragging) {
            return;
        }

        e.preventDefault();

        var element = this.getDOMNode();
        var parentBounds = element.parentNode.getBoundingClientRect();
        var parentWidth = parentBounds.right - parentBounds.left;
        var percentAcrossContainer = (e.pageX - parentBounds.left) / parentWidth;

        var affected = element.previousSibling;
        var affectedLeft = affected.getBoundingClientRect().left;
        var affectedOffsetPercent = affectedLeft / parentWidth;

        console.log(affectedOffsetPercent);

        // calculate the percent, and set a 10% minimum
        var percent = Math.max(percentAcrossContainer - affectedOffsetPercent, 0.10);

        // and a 90% max
        percent = Math.min(percent, 0.9);
        this.setState({percent: percent}, this.applyPosition);
    },
    applyPosition: function(){
        var affected = this.getDOMNode().previousSibling;
        affected.style.width = (this.state.percent * 100) + "%";
    },
    dragEnd: function(e){
        this.isDragging = false;
    },
    componentDidMount: function(){
        window.addEventListener("mousemove", this.dragUpdate, false);
        window.addEventListener("mouseup", this.dragEnd, false);
        this.applyPosition();
    },
    componentWillUnmount: function(){
        window.removeEventListener("mousemove", this.dragUpdate);
        window.removeEventListener("mouseup", this.dragEnd);
    },
    render: function() {
        return (
            <div className="divider" 
                onMouseDown={this.dragStart} />
        );
    }
});


var Split = React.createClass({
    getInitialState: function() {
        return {};
    },
    componentDidMount: function() {

    },

    render: function() {
        var insertDivider = function(nodes, node, index, array) {
            if (index === array.length - 1) {
                return nodes.concat([node]);
            }
            else {
                return nodes.concat([node, <Divider key={index} count={array.length} />]);
            }
        }.bind(this);

        return (
            <div className={this.props.className || "split-component"}>
                {this.props.children.reduce(insertDivider, [])}
            </div>
        );
    }
});

module.exports = Split;

