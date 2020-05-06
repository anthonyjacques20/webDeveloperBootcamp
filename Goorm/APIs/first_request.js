var request = require("request");

request("https://api.sunrise-sunset.org/json?lat=20.664230&lng=-105.252617&date=today", function(error, response, body){
	//Error holds any potential errors that we get
	if(!error && response.statusCode == 200){
		var parsedData = JSON.parse(body);
		console.log(response.body);
		console.log(parsedData.results.sunset);
		console.log(parsedData["results"]["sunset"]);
	}
	else {
		console.log("We got an error! - " + error)	
	}
	//Response holds the response
});