const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const flightSchema = new Schema({
    airline: {
        type: String,
        enum: ['American', 'Southwest', 'United']
    },
    flightNo:{
        type: Number,
        min: 10,
        max: 9999
    },
    departs: {
        type: Date,
        default: function(){
            return new Date().getFullYear() + 1
        }
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Flight', flightSchema)