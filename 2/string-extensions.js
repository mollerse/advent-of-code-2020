const {
  aitFFIWrapAggregate: wrapAggregate,
  aitFFIWrapValue: wrap,
  aitFFIUnwrapValue: unwrap,
  aitFFI__F
} = require('ait-lang/ffi');

function strsplit(splitter, str) {
  return wrapAggregate(unwrap(str).split(unwrap(splitter)).map(wrap));
}

function strjoin(joiner, aggr) {
  return wrap(unwrap(aggr).body.map(unwrap).reverse().join(unwrap(joiner)));
}

module.exports = {
  strsplit: aitFFI__F(2, 'strsplit', strsplit),
  strjoin: aitFFI__F(2, 'strjoin', strjoin)
}