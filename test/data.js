// taken from test suite in http://github.com/mmckegg/json-query
module.exports = {
  items: [
    {id: 0, name: 'test'},
    {id: 1, name: 'Another item'},
    {id: 2, name: 'Tickled', description: 'Financially'},
    {id: 3, name: 'Cat'},
    {id: 4, name: 'Dog'},
    {id: 5, name: 'Chicken'}
  ],
  currentItem: 3,
  workitem: {
    id: 3434,
    name: 'Item',
    parentId: 3
  },
  randomFields: {
    findName: 'Cat'
  },
  groupedStuff: {
    'group_a': [
      {id: 343, name: 'Long Cat'},
      {id: 344, name: 'Hover Cat'},
      {id: 345, name: 'Ceiling Cat'}
    ],
    'group_b': [
      {id: 346, name: 'Basement Cat'},
      {id: 347, name: 'Happy Cat'},
      {id: 348, name: 'Displeased Cat'}
    ]
  },
  duplicateProperties: [
    {id: 1, name: 'unique'},
    {id: 2, name: 'not unique'},
    {id: 3, name: 'not unique'}
  ]
};
