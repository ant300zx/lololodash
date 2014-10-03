//MINE
var _ = require("lodash");

var worker = function(data) {

  var quantities = [];

  var groupedData = _.groupBy(data, "article");

   _.forEach(groupedData, function (order, key){
      
      key = parseInt(key);

      eachOrder = _.reduce(order, function (total, singleOrder) {
          var total = total + singleOrder.quantity;
          return total;
          }, 0
      );
    
      quantities.push({"article": key, "total_orders": eachOrder});
  });

  return _.sortBy(quantities, "total_orders").reverse();

}   

module.exports = worker;


//OFFICIAL SOLUTION
 'use strict';

    var _ = require("lodash");

    var overview = function (orders) {

        var overviewarray = [],
            total = 0;

        // Group by article
        orders = _.groupBy(orders, 'article');

        _.forEach(orders, function (item, key) {

            key = parseInt(key);
            total = 0;

            // If only one article
            if (item.length === 1) {
                total = item[0].quantity;

            // Else make sum of all orders
            } else {
                total = _.reduce(item, function(sum, item) {
                    return sum + item.quantity;
                }, 0);
            }

            overviewarray.push({
                article: key,
                total_orders: total
            });

        });

        // Order
        overviewarray = _.sortBy(overviewarray, "total_orders").reverse();

        return overviewarray;
    };

    module.exports = overview;