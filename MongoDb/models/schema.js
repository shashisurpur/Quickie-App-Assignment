import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    id:Number,
    companyName : String,
    symbol : String,
    marketCap : String,
    currentPrice : String

})

const postMessage = mongoose.model('postMessage',postSchema);

export default postMessage;