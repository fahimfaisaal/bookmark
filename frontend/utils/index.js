export const shortId = () => Math.random().toString(32).substring(2);

export const fakeArr = (length) => [...new Array(length).keys()];

export const generateQuery = ({
  tags,
  categories,
  priceRange = [],
  ratingRange = [],
  publisherId,
  searchText,
  availabilities,
  page,
  authors
}) => ({
  populate: '*',
  pagination: {
    page
  },
  filters: {
    name: {
      $containsi: searchText
    },
    rating: {
      $gte: ratingRange.at(0),
      $lte: ratingRange.at(1)
    },
    variants: {
      price: {
        $gte: priceRange.at(0),
        $lte: priceRange.at(1)
      }
    },
    tags: {
      id: {
        $in: tags
      }
    },
    categories: {
      id: {
        $in: categories
      }
    },
    publisherId: {
      id: publisherId
    },
    authors: {
      id: {
        $in: authors
      }
    },
    status: {
      $in: availabilities
    }
  }
});

export const parseQuery = (paramsPath, valuePath) => {
  const valuesPath = valuePath.split('/');
  return paramsPath.split('/').reduce((acc, cur, index) => {
    if (cur.startsWith('[') && cur.endsWith(']')) {
      acc[cur.substring(1, cur.length - 1)] = valuesPath.at(index);
    }
    return acc;
  }, {});
};
