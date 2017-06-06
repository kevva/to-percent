import test from 'ava';
import m from '.';

test(t => {
	t.is(m(0.75), 75);
	t.is(m(0.1256666), 13);
	t.is(m(0.1246666), 12);
});
