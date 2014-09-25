//MINE
var _ = require("lodash");

var worker = function(data) {

	var result = [];
	var group = _.groupBy(data, "username");  

	for(var name in group) {
	  
	  result.push({
	    "username": name, 
	    "comment_count": _.size(group[name])
	  });

	}

	return _.sortBy(result).reverse();

};

module.exports = worker;

//OFFICIAL SOLUTION
