import test from 'ava';
import m from '.';

test('convert to percent', t => {
	t.is(m(0.75), 75);
	t.is(m(0.1256666), 13);
	t.is(m(0.1246666), 12);
});

test('accepts a number between 0 and 1', t => {
	t.throws(m.bind(null, '1'), 'Expected a `number`, got `string`');
	t.throws(m.bind(null, 1.5), 'Expected a `number` between 0 and 1, got `1.5`');
});
