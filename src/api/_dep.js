var dep = {
    set: function(name, module){
        this._modules[name] = module;

        if (this._waiting[name]) {
            this._waiting[name].forEach(function(cb){
                cb();
            });
        }
    },
    get: function(names, callback){
        var remaining = names.length;
        var results = [];
        var _modules = this._modules, _waiting = this._waiting;

        var maybeFinish = function(){
            if (remaining === 0) {
                callback.apply(null, results);
            }
        };

        names.forEach(function(name, index){
            if (_modules[name]) {
                results[index] = _modules[name];
                remaining--;
                maybeFinish();
            }
            else {
                var thisQueue = _waiting[name] = _waiting[name] || [];
                var waitingIndex = thisQueue.length;
                thisQueue.push(function(){
                    results[index] = _modules[name];
                    remaining--;

                    if (thisQueue.length === 1) {
                        delete _waiting[name];
                    }
                    else {
                        thisQueue.splice(waitingIndex, 1);
                    }

                    maybeFinish();
                });
            }
        });
    },
    _modules: {},
    _waiting: {}
};