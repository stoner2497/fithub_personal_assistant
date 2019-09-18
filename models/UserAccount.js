const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AccountSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "usersapp"
  },
  avatar: {
    type:String,
  },
  userName: {
    type: String
  },
  email: {
    type: String
  },
  bio: {
    type: String,
    // required: true
  },
  Subscribed:[
    {
      user: {
    type:Schema.Types.ObjectId,
    ref:'userapp'
  }
}
],
Subscribing:[
  {
    user: {
  type:Schema.Types.ObjectId,
  ref:'userapp'
}
}
],
  Views:[{
    user:{
      type:Schema.Types.ObjectId,
      ref:'views'
    }
  }],
});

module.exports = Account = mongoose.model("account", AccountSchema);
