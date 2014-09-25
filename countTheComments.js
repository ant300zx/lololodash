//MINE
var _ = require("lodash");

var worker = function(data) {

	var result = [];

	var group = _.groupBy(data, "username");  


	for(var name in group) {
	  
	  result.push({
	    "username": name, 
	    "comment_count_": _.size(group[name])
	  });

	}


 	console.log(result);



	return 

};

module.exports = worker;

//OFFICIAL SOLUTION
