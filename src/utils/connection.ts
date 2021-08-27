import mongoose, { CallbackWithoutResult } from 'mongoose';

interface mongooseProps extends CallbackWithoutResult {
 useNewUrlParser?: boolean | false;
 useUnifiedTopology?: boolean | false;
}
const options = {
 useNewUrlParser: true,
 useUnifiedTopology: true
} as mongooseProps; 

try{
mongoose.connect('mongodb://localhost:27017/videos');
}catch(err: any){
  console.log(err)
}
 