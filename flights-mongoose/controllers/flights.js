var Flight = require('../models/flight');
module.exports = {
    index,
    new: newFlight,
    create
};

function index(req, res){
    Flight.find({}, function(err, flights){
        res.render('flights/index', {flights});
    }).sort('departs');
 //Query the database to gather all resources
 //.. because this is an index view
 //Once that step is complet we render 
//  a view and pass the data into the view
};

function newFlight(req, res){
    //we want to render a new ejs view.
    res.render('flights/new')
};

function create(req, res){
    Flight.create(req.body, function(err, flight){
        console.log(flight)
        res.redirect('/flights')
    })
    //We need to create a new flight using flight.create()
    //Once that flight is created we need to redirect to our 
    //index view
}