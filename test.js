var prop = require("./");

it('creates a new prop', function(){
  var foo = prop();

  expect(foo()).to.not.exist;

  foo(3.14);
  expect(foo()).to.equal(3.14);

  foo(156);
  expect(foo()).to.equal(156);
});

it('creates a new prop with default value', function(){
  var foo = prop(3.14);

  expect(foo()).to.equal(3.14);
});
