var prop    = require("./"),
    expect = require('chai').expect;

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

it('creates a new prop with getter', function(){

  var foo = prop(3.14, function(raw){
    return raw + '%';
  });

  expect(foo()).to.equal('3.14%');
  expect(foo.raw()).to.equal(3.14);

});

it('creates a new prop with setter', function(){

  var foo = prop(3.14, null, function(raw){
    return raw + '$';
  });

  expect(foo()).to.equal('3.14$');
  expect(foo.raw()).to.equal('3.14$');

  foo(156);

  expect(foo()).to.equal('156$');
  expect(foo.raw()).to.equal('156$');

  foo.raw(156);

  expect(foo()).to.equal(156);
  expect(foo.raw()).to.equal(156);

});

it('has chaining methods for setting getters and setters', function(){

  var foo = prop()
        .getter(function(val){
          return val + '.00$';
        })
        .setter(function(val){
          return parseInt(val);
        });

  foo('256$');

  expect(foo()).to.equal('256.00$'
);

});

it('can be extended', function(){

  var foo = prop(3.14)
        .extend(function(raw){

          return function newRaw(newValue){
            if(newValue){
              newValue*=10;
              return raw(newValue);
            }

            return raw();
          };
        });


  foo(156);

  expect(foo()).to.equal(1560);

});
