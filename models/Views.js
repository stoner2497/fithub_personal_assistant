const mongoose = require('mongoose');
const Schema = mongoose.Schema

const ViewSchema = new Schema({
    user:[{
        type:String
    }]
})

module.exports = Views = mongoose.model('views',ViewSchema)