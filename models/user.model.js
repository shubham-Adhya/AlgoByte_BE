const mongoose=require("mongoose")
const {Schema} = mongoose

const userSchema = new Schema({
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
        type: String,
        required: true,
    }
  },
  {versionKey:false}
);

  const UserModel= mongoose.model("user",userSchema)

  module.exports={UserModel}