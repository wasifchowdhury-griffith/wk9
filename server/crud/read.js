module.exports = function(app, db){
    app.post('/api/crud/read', function(req, res){
        var resultArray = [];
        var pointer = db.collection('products').find();

        pointer.forEach(function(doc, err) {
            resultArray.push(doc);
        }, function() {
            var json = JSON.stringify(resultArray);
            console.log("Found Products");
            res.send(json);
        });

        
    });   
}