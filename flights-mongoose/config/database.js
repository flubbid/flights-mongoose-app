var mongoose = require('mongoose')

mongoose.connect(
    'mongodb://localhost/flights',
    {useNewUrlParser: true}
);

var db = mongoose.connection;

db.on('connected', function(){
    console.log(`Connected to MongoDB  at ${db.host}:${db.port}`)
});

// mongoo.connection.on('connected', ()=> {
// console.log('Connection to MongoDB Engine Established')
// });

