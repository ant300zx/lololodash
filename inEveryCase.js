//MINE
var _ = require("lodash");

var worker = function(items) {
	
	var each = _.forEach(items, 
		function(item){
			
			if(item.population > 1.0) {
				item["size"] = "big";
			}else if (item.population > 0.5) {
				item["size"] = "small";
			}else {
				item["size"] = "med";
			}
		}
	);

	return each
};

module.exports = worker;

//THEIRS
 'use strict';

    var _ = require("lodash");

    var addsizetyp = function (item) {

        _.forEach(item, function (value, key) {

            if (value.population > 1) {
                item[key].size = "big";
            } else if (value.population > 0.5) {
                item[key].size = "med";
            } else {
                item[key].size = "small";
            }
        });

        return item;
    };

    module.exports = addsizetyp;