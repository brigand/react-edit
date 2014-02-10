var alphas = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
function pickOne(source){
    return source[Math.floor(Math.random() * source.length)];
}

function pickN(n, source){
    var s = "";
    while (s.length < n) {
        s += pickOne(source);
    }
    return s;
}

var pick5Alphas = pickN.bind(null, 5, alphas);

Parse.Cloud.beforeSave("Snapshot", function(request, response) {
    request.object.set("hash", pick5Alphas());
    response.success();
});
