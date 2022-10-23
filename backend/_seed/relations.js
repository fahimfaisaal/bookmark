const relations = [
  {
    model: 'book',
    relateWith: 'category',
    relationType: 'm2m',
    labels: ['categories', 'books'],
    max: 3,
    min: 1
  },
  {
    model: 'book',
    relateWith: 'tag',
    relationType: 'm2m',
    labels: ['tags', 'books'],
    max: 5,
    min: 1
  },
  {
    model: 'book',
    relateWith: 'author',
    relationType: 'm2m',
    labels: ['authors', 'books'],
    max: 3,
    min: 1,
  },
  {
    model: 'user',
    relateWith: 'book',
    relationType: 'm2m',
    labels: ['favorites', 'books'],
    max: 10,
    min: 3
  },
  {
    model: 'author',
    relateWith: 'publisher',
    relationType: 'm2m',
    labels: ['publishers', 'authors'],
    max: 5,
    min: 1
  },
  {
    model: 'rating',
    relateWith: 'book',
    relationType: 'o2m',
    label: 'bookId',
  },
  {
    model: 'rating',
    relateWith: 'user',
    relationType: 'o2m',
    label: 'userId',
  },
  {
    model: 'book',
    relateWith: 'publisher',
    relationType: 'o2m',
    label: 'publisherId',
  },
  {
    model: 'variant',
    relateWith: 'language',
    relationType: 'o2m',
    label: 'languageId'
  },
  {
    model: 'variant',
    relateWith: 'book',
    relationType: 'o2m',
    label: 'bookId'
  },

]

module.exports = relations