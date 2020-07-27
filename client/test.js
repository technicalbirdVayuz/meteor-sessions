import { Todo } from './../collections/collections';
Template.hello.onRendered(function(){
	Meteor.subscribe("fetch_all_tasks")
})
Template.hello.helpers({

	fetch_all_posts:function(){
		var data = Todo.find({}).fetch()
		console.log(data);
		console.log("data");
		return data;
		},

})


Template.hello.events({
	"click #submit_btn":function(event){
		event.preventDefault();
		var input = $("#simple_input").val()
		if(input == ""){
			alert("Please enter the task name");
		}else{
			alert("Entered Task name: " + input);
			var obj ={};
			obj.task_name = input;
			$("#loading_text").removeClass("display_hidden");

			Meteor.call("add_task", obj,function(error,result){
				if(error){
					alert("Something went wrong!");
				}else{
					$("#loading_text").addClass("display_hidden");
					$("#simple_input").val("")	
				}
			});
					
			
		}
	}

})