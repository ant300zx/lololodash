//MINE
var _ = require("lodash");

var worker = function(list) {
	return _.where(list, {'active': true});
};

module.exports = worker;

//THEIRS
'use strict';

var _ = require("lodash");

var filterwhere = function (item) {
    return _.where(item, {active: true});
};

module.exports = filterwhere;