export class Utils{
	static  absoluteUrl(){
		return Meteor.absoluteUrl() + "/api/";
	}

	static getWeatherKey(){
		return "8dad1960037a8b8e627ecaf0cdead99b"
	}
}

