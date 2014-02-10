var CortexMixin = {
    get: function(what){
        return what.getValue ? what.getValue() : what;
    },
    set: function(what){
        return function(value){
            if (value && value.target && value.target.value != null) {
                value = value.target.value;
            }

            if (what.set) {
                what.set(value);
            }
        };
    }
};

module.exports = CortexMixin;