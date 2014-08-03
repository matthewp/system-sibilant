var compile = require('sibilant').sibilant.translateAll;

exports.translate = function(load) {
  var result = compile(load.source);
  load.source = result;
};
