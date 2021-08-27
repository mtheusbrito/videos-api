import mongoose,{ Mongoose } from "mongoose";
const Schema = new mongoose.Schema({
  name:{
    type: String,
    required: true,
  }, 
  description : {
    type: String
  },
  category: mongoose.Schema.Types.ObjectId,
  ref: 'Categories'
})

export default mongoose.model('Videos', Schema)