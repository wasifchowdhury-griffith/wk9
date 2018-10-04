const express = require('express');
const bodyParser = require('body-parser');
const app = express(); 

// MongoDB connection
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017'

MongoClient.connect(url, {poolSize:10}, function(err,client){
    if (err) {return console.log(err)}
    console.log("Database connection is successful")
    const dbName = 'mydb';
    const db = client.db(dbName);
   
   
    // CORS
    // We are enabling CORS so that our 'ng serve' Angular server can still access
    // our Node server. 
    const cors = require('cors')
    var corsOptions = {
        origin: 'http://localhost:4200',
        optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 
    }
    app.use(cors(corsOptions))

    // Body-Parser
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));


    //CRUD modules
    require('./crud/create.js')(app, db);  
    require('./crud/add.js')(app, db);  
    require('./crud/remove.js')(app, db);  
    require('./crud/update.js')(app, db);  
    require('./crud/read.js')(app, db);  
    require('./crud/search.js')(app, db);

    // HTTP Listener
    app.listen(3000, function(){
        console.log('Server is running on port 3000');
    })
    module.exports = app;
});

