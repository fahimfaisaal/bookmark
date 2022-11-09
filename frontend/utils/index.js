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
