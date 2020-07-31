import { Todo } from './../collections/collections';
Template.hello.onRendered(function(){
	Meteor.subscribe("fetch_all_tasks")
})
Template.hello.helpers({

	fetch_all_posts:function(){
		var data = Todo.find({}).fetch()
		for(var i=0;i<data.length;i++){
			data[i].abcd = 0;
		}
		console.log(data);
		console.log("data");
		return data;
		},

})


Template.hello.events({
	"click #submit_btn_1":function(event){
		event.preventDefault();
		var inputValue = $("#simple_input_1").val();
		FlowRouter.go("/c/" +inputValue);
	},
	"click #delete_task":function(event){
		event.preventDefault();
	
		var obj = {};
		obj._id = this._id;
		
		Meteor.call("delete_task", obj,function(error,result){
				if(error){
					alert("Something went wrong!");
				}else{
					// $("#loading_text").addClass("display_hidden");
					// $("#simple_input").val("")	
				}
			});
	},
	"click #btn_in_loop":function(event){
		event.preventDefault();
		console.log(this);
	
		var obj = {};
		obj._id = this._id;
		var newValue = prompt("Enter new value");

		obj.name = newValue;
		Meteor.call("update_task", obj,function(error,result){
				if(error){
					alert("Something went wrong!");
				}else{
					// $("#loading_text").addClass("display_hidden");
					// $("#simple_input").val("")	
				}
			});
	},
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