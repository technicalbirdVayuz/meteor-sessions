import {Todo} from './../collections/collections.js';

Meteor.startup(function(){
	// Todo.insert({ name: "David", score: 0 });
})

Meteor.publish("fetch_all_tasks",function(){
	return Todo.find({});
})

Meteor.methods({
	"add_task":function(obj){
		var result = Todo.insert({ name: obj.task_name, score: 0 });
		return result;
	}

})