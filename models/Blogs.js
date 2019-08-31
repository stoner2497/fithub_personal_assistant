const mongoose = require('mongoose');
const Schema = mongoose.Schema

const BlogSchema  = new Schema({

  User: {
    type: Schema.Types.ObjectId,
    ref: "usersapp"
  },
  name: {
    type: String
  },
  avatar: {
    type: String
  },
  Coverimage: {
    type: String,
  },
  Title:{
      type:String,
      required:true
  },
  SubTitle:{
      type:String,
      required:true
  },
  Conetnt:{
      type:String,
      required:true
  },
  likes: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: "usersapp"
      },
    }
  ],
  comments: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: "usersapp"
      },
      text: {
        type: String,
        required: true
      },
      name: {
        type: String
      },
      avatar: {
        type: String
      },
      date: {
        type: Date,
        default: Date.now
      }
    }
  ]
});

module.exports = Blogs = mongoose.model('blogs',BlogSchema)