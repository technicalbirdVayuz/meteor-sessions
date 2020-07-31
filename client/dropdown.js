// Template.dropdown.onRendered(function(){
// 	var appId = FlowRouter.getParam("previousPageValue");
// 	// $("#cars").val(appId)

// })


Template.dropdown.helpers({
	"compare_value":function(a){
		if(FlowRouter.getParam("previousPageValue") == a){
			return true;
		}else{
			return false;
		}
	}
})


Template.dropdown.events({
	'change #cars':function(event){
		event.preventDefault();
		FlowRouter.setParams({previousPageValue: $("#cars").val()});
		}
})