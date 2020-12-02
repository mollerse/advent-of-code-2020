const {
  aitFFIWrapAggregate: wrapAggregate,
  aitFFIWrapValue: wrap,
  aitFFIUnwrapValue: unwrap,
  aitFFI__F
} = require('ait-lang/ffi');

function strsplit(splitter, str) {
  return wrapAggregate(unwrap(str).split(unwrap(splitter)).map(wrap));
}

module.exports = {
  strsplit: aitFFI__F(2, 'strsplit', strsplit)
}