var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
	username: String,
	password: String, //hashed password
	created_at: {type: Date, default: Date.now}
});

var postSchema = new mongoose.Schema({
	text: String,
	username: String,
	created_at: {type: Date, default: Date.now}
});

//declare User model which has userSchema
mongoose.model('User', userSchema);

//declare Post model which has postSchema
mongoose.model('Post', postSchema);
