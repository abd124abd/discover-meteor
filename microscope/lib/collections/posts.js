// no 'var' so to be global scope, otherwise local to file only
Posts = new Mongo.Collection('posts');

Posts.allow({
	insert: function(userId, doc) {
		return !! userId;
	}
});