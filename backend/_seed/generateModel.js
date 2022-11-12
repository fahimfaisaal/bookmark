const { faker } = require('@faker-js/faker');
const bcrypt = require('bcryptjs');

const createAddress = () => {
  const address = {
    country: faker.address.country(),
    city: faker.address.city(),
    state: faker.address.state(),
    zip: faker.address.zipCode(),
    streetAddress: faker.address.streetAddress()
  };

  return new URLSearchParams(address).toString();
};

const generateModel = {
  user: () => {
    const fullName = faker.name.fullName().split(/\s+/);
    const [firstName, lastName] = fullName;
    const randStr = faker.random.alphaNumeric(5);

    return {
      firstName,
      lastName,
      username: faker.internet
        .userName(fullName, randStr)
        .toLowerCase()
        .replace(/\W/g, ''),
      email: faker.internet.email(fullName + randStr, lastName),
      password: bcrypt.hash('121212aA', 10),
      gender: faker.helpers
        .arrayElement(['male', 'female', 'others'])
        .toUpperCase(),
      phone: faker.phone.number('+8801#-########'),
      address: createAddress(),
      role: 1
    };
  },
  author: () => ({
    name: faker.name.fullName(),
    bio: faker.lorem.sentence(20)
  }),
  publisher: () => {
    const name = faker.word.noun();
    return {
      name,
      bio: faker.lorem.sentence(20),
      socials: ['facebook', 'twitter', 'linkedin']
        .map((socialName) => `https://${socialName}.com/${name}`)
        .join(','),
      website: faker.internet.domainName()
    };
  },
  rating: () => ({
    rate: faker.datatype
      .float({
        min: 0,
        max: 5
      })
      .toFixed(1),
    comment: faker.lorem.lines(3)
  }),
  tag: () => ({
    type: faker.word.noun()
  }),
  category: () => ({
    type: faker.word.noun()
  }),
  book: () => ({
    name: faker.commerce.productName(),
    publishedYear: faker.date.past(),
    status: faker.helpers
      .arrayElement(['in_stock', 'stock_out', 'coming_soon', 'pre_order'])
      .toUpperCase(),
    description: faker.commerce.productDescription(),
    bestSelling: faker.helpers.arrayElement(['true', 'false']),
    rating: faker.datatype
      .float({
        min: 0,
        max: 5
      })
      .toFixed(1),
    totalPages: faker.datatype.number({
      min: 30,
      max: 3000
    })
  }),
  variant: () => ({
    format: faker.helpers.arrayElement(['pdf', 'audio', 'hard_cover']),
    pageQuality: faker.helpers
      .arrayElement([
        'white_offset',
        'white_or_natural',
        'gloss_text',
        'white_smooth_offset'
      ])
      .toUpperCase(),
    pageFormat: faker.helpers
      .arrayElement(['a0', 'a1', 'a2', 'a3', 'a4', 'a5', 'a6'])
      .toUpperCase(),
    price: faker.datatype.number({
      min: 30,
      max: 5e3
    }),
    discount: faker.datatype.number({
      min: 0,
      max: 60
    }),
    pageCount: faker.datatype.number({
      min: 50,
      max: 2e3
    })
  }),
  language: () => ({
    name: faker.random.locale()
  }),
  home: () => ({
    sliders: [
      {
        heading: 'Meet Your Next Favorite Book',
        status: 'SALE UP TO 20% OFF',
        buttons: [
          {
            text: 'shop now',
            url: '/books'
          }
        ]
      }
    ],
    author: {
      title: 'Top Authors',
      renderCount: 12
    },
    publisher: {
      title: 'Top Publishers',
      renderCount: 12
    },
    category: {
      title: 'Which Book You Like to See?',
      renderCount: 12
    },
    newArrival: {
      title: 'New Arrival Books',
      renderCount: 12
    },
    popular: {
      title: 'Popular Books',
      renderCount: 12
    }
  }),
  manufacturer: () => ({
    title: '',
    subTitle: '',
    renderCount: 20,
    searchPlaceholder: ''
  }),
  writer: () => ({
    title: '',
    subTitle: '',
    renderCount: 20,
    searchPlaceholder: ''
  })
};

module.exports = generateModel;
