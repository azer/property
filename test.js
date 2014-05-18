var test = require('prova');
var prop = require("./");

test('creates a new prop', function (t) {
  t.plan(3);

  var foo = prop();

  t.notOk(foo());

  foo(3.14);
  t.equal(foo(), 3.14);

  foo(156);
  t.equal(foo(), 156);
});

test('creates a new prop with default value', function (t) {
  t.plan(1);
  
  var foo = prop(3.14);

  t.equal(foo(), 3.14);
});
