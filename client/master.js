Template.registerHelper("divible_by_2",function(currentPost){
	return  currentPost%2 == 0;
})

Template.registerHelper("fetch_posts",function(){
	
		var array = [];

		for(i=1;i<=10;i++){
			array.push({
				post:i
			});
		}
		return array;
})