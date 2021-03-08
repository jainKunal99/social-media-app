import mongoose from 'mongoose'

const postModel = mongoose.Schema({
    user: String,
    imgName: String,
    text: String, //post content
    avatar: String, //profile Image of the user which will be saved to Db
    timeStamp: String,
    liked: Boolean,
    likes_count: Number,
    comments: Array
});
//                             {'collectionName','modelName'}
export default mongoose.model('posts', postModel);