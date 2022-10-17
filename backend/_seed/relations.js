const relations = [
  {
    model: 'book',
    relationType: 'm2m',
    relateWith: 'category',
    labels: ['categories', 'books'],
    max: 3,
    min: 1
  },
  {
    model: 'book',
    relationType: 'm2m',
    relateWith: 'tag',
    labels: ['tags', 'books'],
    max: 5,
    min: 1
  },
  {
    model: 'book',
    relationType: 'm2m',
    relateWith: 'author',
    labels: ['authors', 'books'],
    max: 3,
    min: 1
  },
  {
    model: 'book',
    relationType: 'o2m',
    relateWith: 'variant',
    label: 'variants',
    max: 3,
    min: 1,
  },
  {
    model: 'book',
    relationType: 'o2m',
    relateWith: 'rating',
    label: 'ratings',
    max: 5,
    min: 1,
    unique: true
  },
  {
    model: 'user',
    relationType: 'o2m',
    relateWith: 'rating',
    max: 15,
    min: 0,
    unique: true
  },
  {
    model: 'author',
    relationType: 'm2m',
    relateWith: 'publisher',
    labels: ['publishers', 'authors'],
    max: 5,
    min: 1
  },
  {
    model: 'publisher',
    relationType: 'o2m',
    relateWith: 'book',
    label: 'books',
    max: 10,
    min: 1,
    unique: true
  },
  {
    model: 'language',
    relationType: 'o2m',
    relateWith: 'variant',
    label: 'variants',
    max: 15,
    min: 0
  },
]

module.exports = relations