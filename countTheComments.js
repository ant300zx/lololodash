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
 'use strict';

var _ = require("lodash");

var commentcount = function (comments) {

    var counted = [];

    // Group by article
    comments = _.groupBy(comments, 'username');

    _.forEach(comments, function (item, name) {

        counted.push({
            username: name,
            comment_count: _.size(item)
        });
    });

    return _.sortBy(counted, "comment_count").reverse();

};

module.exports = commentcount;
