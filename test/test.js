'use strict';

var chai = require('chai');
var assert = chai.assert;

var lodashQuery = require('../src');

var rawData = require('./data');

describe('lodash query', function() {

  it('returns the rawData when the predicate is a .', function() {
    var result = lodashQuery.query('.', rawData);
    assert.deepEqual(result.value, rawData);
  });

  it('requires a leading .', function() {
    var result = lodashQuery.query('current_item', rawData);
    assert.isNull(result.value);
    result = lodashQuery.query('current_item', rawData);
    assert.deepEqual(result.value, 3);
  });

  it('can walk the object tree', function() {
    var result = lodashQuery.query('.workitem', rawData);
    assert.deepEqual(result.value, {
      id: 3434,
      name: 'Item',
      parentId: 3
    });

    result = lodashQuery.query('.workitem.id', rawData);
    assert.equal(result.value, 3434);
    result = lodashQuery.query('.workitem.name', rawData);
    assert.equal(result.value, 'Item');
    result = lodashQuery.query('.workitem.parent_id', rawData);
    assert.equal(result.value, 3);
  });

  it('can retrieve an item from an array by index', function() {
    var result = lodashQuery.query('.items[1]', rawData);
    assert.deepEqual(result.value, {
      id: 1,
      name: 'Another Item'
    });

    result = lodashQuery.query('.items[3]', rawData);
    assert.deepEqual(result.value, {
      id: 3,
      name: 'Cat'
    });

    result = lodashQuery.query('.grouped_stuff.group_a[0]', rawData);
    assert.deepEqual(result.value, {
      id: 343,
      name: 'Long Cat'
    });

    result = lodashQuery.query('.grouped_stuff.group_b[2]', rawData);
    assert.deepEqual(result.value, {
      id: 348,
      name: 'Displeased Cat'
    });
  });

  it('can retrieve an item from an array by predicate', function() {
    var result = lodashQuery.query('.items[name="Dog"]', rawData);
    assert.deepEqual(result.value, {
      id: 4,
      name: 'Dog'
    });
  });

  // TODO write a test that demonstrates retrieving .grouped_stuff.group_a based
  // on name="Hover Cat".  Something like .grouped_stuff[.[][name="Hover Cat"]];

  it('can retrieve multiple values when a predicate matches multple values', function() {
    var result = lodashQuery.query('.duplicate_properties[name="not unique"]', rawData);
    assert.isNull(result.key);
    assert.deepEqual(result.value, [
      {
        id: 2,
        name: 'not unique'
      },
      {
        id: 3,
        name: 'not unique'
      }
    ]);
  });

  it('can pluck a value from an array', function() {
    var result = lodashQuery.query('.duplicate_properties[name="not unique"].id', rawData);
    assert.isNull(result.key);
    assert.deepEqual(result.value, [2, 3]);
  });

  it('treats objects as arrays', function() {
    var result = lodashQuery.query('.[id=3434]', rawData);
    assert.equal(result.key, 'workitem');
    assert.deepEqual(result.value, {
      id: 3434,
      name: 'Item',
      parentId: 3
    });
  });

  it('returns a complex object');

  it('supports OR operators');
});



