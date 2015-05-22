'use strict';
var test = require('ava');
var toPercent = require('./');

test(function (t) {
	t.assert(toPercent(0.75) === 75);
	t.assert(toPercent(0.1256666) === 13);
	t.assert(toPercent(0.1246666) === 12);
	t.end();
});
