module.exports = function(app, db){
    app.post('/api/crud/create', function(req, res){

        db.createCollection("products", function(err, result) {
            if (err) throw err;
            console.log("Collection products created");
            
            var products = 
            [   
                {
                    prodId: "1",
                    name: "game",
                    type: "entertainment",
                    desc: "video game"
                },

                {
                    prodId: "2",
                    name: "iPhone 6s",
                    type: "phone",
                    desc: "apple iPhone"
                },

                {
                    prodId: "3",
                    name: "PC",
                    type: "console",
                    desc: "Gaming PC"
                },
            ];

            db.collection('products').insertMany(products, function(err, result){
                console.log('Products inserted');
                res.send(true);
            });
            
        });

       
    });
}