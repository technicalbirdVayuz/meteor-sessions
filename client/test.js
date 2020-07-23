import { Todo } from './../collections/collections';
Template.hello.helpers({

	fetch_all_posts:function(){
		var data = Todo.find({}).fetch()
		console.log(data);
		console.log("data");
		return data;
		},

})
