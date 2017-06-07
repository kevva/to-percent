'use strict';
module.exports = val => {
	if (typeof val !== 'number') {
		throw new TypeError(`Expected a \`number\`, got \`${typeof val}\``);
	}

	if (val < 0 || val > 1) {
		throw new TypeError(`Expected a \`number\` between 0 and 1, got \`${val}\``);
	}

	return Math.round(val * 100);
};
