Template.hello.helpers({
	test:function(){
		return "<b>Abcd</b>";
	},
	fetch_posts:function(){
		var array = [];

		for(i=1;i<=5;i++){
			array.push({
				post:i
			});
		}
		return array;
	},testing(){
		return "<b>abcd</b>";
	},

})
Template.hello.onCreated(function(){
	// alert("on Created");
})

Template.hello.onRendered(function(){
	// alert("on Rendered");
})

Template.hello.onDestroyed(function(){
	// alert("on Destroyed");
})