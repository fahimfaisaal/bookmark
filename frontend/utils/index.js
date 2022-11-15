import qs from 'qs';

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
  pageSize,
  authors,
  sortKey,
  ...filters
}) => {
  const query = {
    populate: '*',
    sort: sortKey,
    pagination: {
      page,
      pageSize
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
      },
      ...filters
    }
  };

  return qs.stringify(query, { encode: false });
};

export const parseQuery = (paramsPath, valuePath) => {
  const valuesPath = valuePath.split('/');
  return paramsPath.split('/').reduce((acc, cur, index) => {
    if (cur.startsWith('[') && cur.endsWith(']')) {
      acc[cur.substring(1, cur.length - 1)] = valuesPath.at(index);
    }
    return acc;
  }, {});
};

export const adjustValidURL = (path) => {
  if (/^\/uploads/.test(path)) {
    const publicURL = process.env.NEXT_PUBLIC_API_URL;
    return `${publicURL.substring(0, publicURL.length - 4)}${path}`;
  }

  return path;
};
