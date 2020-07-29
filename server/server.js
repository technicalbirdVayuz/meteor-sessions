import {Todo} from './../collections/collections.js';

Meteor.startup(function(){
	// Todo.insert({ name: "Completed Task", score: 0, is_complete:true });
})

Meteor.publish("fetch_all_tasks",function(){
	return Todo.find({});
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

})
