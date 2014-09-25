//MINE
var _ = require("lodash");

var worker = function(data) {

	var result = {
		hot: [],
		warm: []
	};

	_.some(data, function(data, name){

		var oneOver = _.some(data, function(data){
		  	if(data > 19){
				return true
	  		}
		});

		var allOver = _.every(data, function(data){
		
			if(data > 19){
				return true
			}
		
		});

		if (allOver) {
		  result.hot.push(name);
		}else if (oneOver) {
		  	result.warm.push(name);
		}

	});

	return result

};

module.exports = worker;

//THEIRS
 'use strict';

    var _ = require("lodash");

    var tempsort = function (item) {
        var result = {
            hot: [],
            warm: []
        };

        function check_temp (item) {
            return item > 19;
        }

        _.forEach(item, function (town, townname) {

            if (_.every(town, check_temp)) {
                result.hot.push(townname);
            } else if (_.some(town, check_temp)) {
                result.warm.push(townname);
            }

        });

        return result;
    };

    module.exports = tempsort;


