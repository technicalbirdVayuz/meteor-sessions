import {Todo} from './../collections/collections.js';

Meteor.startup(function(){
	console.log("Server Started");
	console.log("Server Started Agasdaain");
	Todo.insert({ name: "David", score: 0 });
})