const mongoose = require('mongoose');
const Schema = mongoose.Schema

const SubScribeSchema = new Schema({
    user:{
        type:String,
        required:true
    },
    Subscribed:[{
       user :{
            type:Schema.Types.ObjectId,
            ref:'usersapp'
        }
 }],
    Subscribing:{
        type:Schema.Types.ObjectId,
        ref:'usersapp'
    }
})

module.exports = Subscribed = mongoose.model('subscribe',SubScribeSchema)