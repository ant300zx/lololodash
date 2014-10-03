//MINE
var _ = require("lodash");

var worker = function(data) {

  var totalIncome  = 0;
  var totalPeople = parseInt(data.length);
  var sorted = {};

  _.forEach(data, function (person) {

    var income = parseInt(person.income);
   
    totalIncome = totalIncome + income;
    
    return parseInt(totalIncome);
    
  });

  var totalAverage  = totalIncome / totalPeople;

  sorted.average = totalAverage;

  sorted.underperform = _.sortBy( _.filter(data, function (eachPerson) {
    return eachPerson.income <= sorted.average;
  }), "income");

  sorted.overperform = _.sortBy( _.filter(data, function (eachPerson) {
    return eachPerson.income > sorted.average;
  }), "income");

  return sorted;

}   

module.exports = worker;


//OFFICIAL SOLUTION
'use strict';                                                                   
                                                                                
var _ = require("lodash");                                                      
                                                                                
var analyze = function (item) {                                                 
                                                                                
    var average,                                                                
        underperform,                                                           
        overperform;                                                            
                                                                                
    // Sort                                                                     
    item = _.sortBy(item, "income");                                            
                                                                                
    // Sum of all incomes                                                       
    average = _.reduce(item, function(sum, num) {                               
        return sum + num.income;                                                
    }, 0);                                                                      
                                                                                
    // calculate average                                                        
    average = average / item.length;                                            
                                                                                
    // filter underperformer                                                    
    underperform = _.filter(item, function (num) {                              
        return num.income <= average;                                           
    });                                                                         
                                                                                
    // filter overperformer                                                     
    overperform = _.filter(item, function (num) {                               
        return num.income > average;                                            
    });                                                                         
                                                                                
    return {                                                                    
        average: average,                                                       
        underperform: underperform,                                             
        overperform: overperform                                                
    };                                                                          
                                                                                
};                                                                              
                                                                                
module.exports = analyze;                                                       