import { User,Todo } from './../collections/collections.js';
const axios = require('axios').default;
 

// const TodoClientSide  = new Mongo.Collection(null);

Template.hello.onRendered(function(){
  Meteor.subscribe("fetch_all_posts");
  // fetchAllTodoList();

})


// function fetchAllTodoList(){
//   axios.get('/fetch_All_tasks')
//   .then(function (response) {
//     // handle success
//     console.log(response.data.result);
//     for(var i=0;i<response.data.result.length;i++){
//       var name = response.data.result[i].name;
//       TodoClientSide._collection.insert({name:name,score:i});      
//     }
//   })
//   .catch(function (error) {
//     // handle error
//     console.log(error);
//   })
//   .then(function () {
//     // always executed
//   });
// }


Template.hello.helpers({
  fetch_all_posts:function(){
    return Todo.find({}).fetch();
  }, 
  fetch_user_name:function(user_id){
    Meteor.subscribe("fetch_user_details_based_on_user_id", user_id)
    var userDetails = User.find({user_id:user_id}).fetch();
 
    return userDetails;
    
  }


})


// Template.hello.events({
//   "click #delete_task":function(events){
//       events.preventDefault();
//       var name= this.name;
//       Meteor.call("delete_task_using_name",name,function(error,result){
//         if(error){
//           alert("Something went wrong");
//         }else{
//           TodoClientSide._collection.remove({name: name});
//           alert("Deletedd Successfully");
//         }
//       })

//     }
// })





