
var Snapshot = Parse.Object.extend("Snapshot");


var cortex;
function save(){
    var snap = new Snapshot();
    snap.set("data", cortex.getValue());
    return snap.save().then(function(snap){
        window.snap = snap;
        window.location.hash = "#/" + snap.get("hash");
    });
}


function get(hash){
    var query = new Parse.Query(Snapshot);
    query.equalTo("hash", hash);
    return query.first();
}

function setCortex(_cortex) {
    cortex = _cortex;
}

module.exports = {
    save: save,
    get: get,
    setCortex: setCortex
}