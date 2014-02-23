module.exports = create;

function create (defaultValue) {
  var value = defaultValue;

  return access;

  function access (newValue) {
    if (arguments.length > 0) {
      value = newValue;
    }

    return value;
  }
}
