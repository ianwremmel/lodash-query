'use strict';

// var _ = require('lodash');

module.exports = {
  pattern: /\.([^\.\[]+)(?:\[(?:([^\.])*?(?:([=<>(?:<=)(?:>=)])\"?(.*?)\"?)?)\])?/g,

  query: function(predicate, data) {

    // TODO can't use split in case there is a period inside a predicate;
    // instead, need to use regex that requires parens be closed
    var match;
    while ((match = this.pattern.exec(predicate)) !== null) {
      console.log(predicate, match);
    }

    // console.log(predicate, this.pattern.exec(predicate));
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
