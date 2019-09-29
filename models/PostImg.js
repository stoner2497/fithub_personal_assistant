const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  User: {
   type:String,
   required:true
  },
  name: {
    type: String
  },
  avatar: {
    type: String
  },
  post: {
    type: String,
    required:true
  },
  caption: {
    type: String,
    required: true
  },
  text:{
    type:String,

  },
  tags:{
    type:String,
    required:true
  },
  likes: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: "usersapp"
      }
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

module.exports = Post = mongoose.model("posts", PostSchema);
