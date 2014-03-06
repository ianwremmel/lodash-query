'use strict';

// var _ = require('lodash');

module.exports = {
  query: function(predicate, data) {

    // TODO can't use split in case there is a period inside a predicate;
    // instead, need to use regex that requires parens be closed
    // var  pattern = /(\w+)(?:[(\d+)|(\w+)|(?:(\w)(.{1})(\w))])?/;
    var pattern = /\.([^\.]*)/;
    console.log(pattern.exec(predicate));
    data = data;
    // var result = _.reduce(predicate.split('.'), function(result, predicate) {
    //   console.log(predicate);
    //   if (!predicate) {
    //     return result;
    //   }

    //   if (predicate.indexOf('[') === -1) {
    //     return result[predicate];
    //   }



    // }, data);

    return {value: null};
  }
};
