const test = require('ava');

test('includes', t => {
  const haystack = 'Now, here, you see, it takes all the running you can do, to keep in the same place. If you want to get somewhere else, you must run at least twice as fast as that!';
  const needle = 'to keep in the same place';
  t.true(haystack.includes(needle));
});
