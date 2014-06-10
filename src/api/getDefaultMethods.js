function method(code, args, defaultOpen){
    return {
        code: (code || "") + "\n\n",
        args: args || "",
        defaultOpen: defaultOpen || false,
        isDefault: true
    }
}

function getDefaultMethods(){
    return {
        // most components use a few of these
        render: method("return <div />", "", true),
        componentDidMount: method("", "rootNode", true),
        componentWillUnmount: method("var rootNode = this.getDOMElement();", "", true),
        getInitialState: method("return {}", "", true),
        shouldComponentUpdate: method("", "nextProps, nextState"),

        // less frequently used
        componentWillReceiveProps: method("", "nextProps"),
        componentWillMount: method(),
        
        // not sure how to use these
        componentWillUpdate: method(),
        componentDidUpdate: method(),
    };
}

module.exports = getDefaultMethods;