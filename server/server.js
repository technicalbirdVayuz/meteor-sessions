import {User,Todo} from './../collections/collections.js';

Meteor.startup(function(){
	// User.insert({"user_id":"user_1",name:"Amit"});
	// Todo.insert({ name: "Amit Task 1", user_id: "user_1"});
	// Todo.insert({ name: "Amit Task 2", user_id: "user_1"});


	// User.insert({user_id:"user_2",name:"Arun"});
	// Todo.insert({ name: "Arun Task 1", user_id: "user_2"});
	// Todo.insert({ name: "Arun Task 2", user_id: "user_2"});
	// Todo.insert({ name: "Arun Task 3", user_id: "user_2"});
})

Meteor.publish("fetch_all_posts",function(){
	return Todo.find({});
})

Meteor.publish("fetch_user_details_based_on_user_id",function(user_id){
	return User.find({user_id:user_id});
})

Meteor.methods({
	"add_task":function(obj){
		var result = Todo.insert({ name: obj.task_name,is_complete:false, score: 0 });
		return result;
	},
	"update_task":function(obj){
		Todo.update({_id : obj._id},{$set:{name : obj.name}});
	},
	"delete_task":function(obj){
		Todo.remove({_id : obj._id});
	},
	"delete_task_using_name":function(name){
		Todo.remove({name: name});
	},

})
