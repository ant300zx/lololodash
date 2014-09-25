//MINE
var _ = require("lodash");

var worker = function(items) {
	var sort = _.sortBy(items, 'quantity');

	return sort.reverse();
};

module.exports = worker;

//THEIRS
'use strict';                                    
                                                 
var _ = require("lodash");                       
                                                 
var sorting = function (item) {                  
    return _.sortBy(item, function (item) {      
        return -item.quantity;                   
    });                                          
                                                 
    /* Also possible:                            
     return _.sortBy(item,"quantity").reverse(); 
     */                                          
};                                               
                                                 
module.exports = sorting;                        