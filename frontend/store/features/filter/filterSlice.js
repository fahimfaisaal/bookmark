import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  search: "",
  tags: [],
  categories: [],
  publishers: [],
  price: [],
  rating: [],
  sort: "",
  availabilities: []
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setFilterFromQuery(state, { payload }) {
      for (const key in payload) {
        const value = payload[key]
        state[key] = Array.isArray(state[key]) ? value.split(/,|-/) : value
      }
    },
    clearFilter: (state) => {
      for (const key in initialState) {
        state[key] = initialState[key];
      }
    },
    addSearch(state, { payload }) {
      state.search = payload;
    },
    addRemoveTags(state, { payload }) {
      const { id } = payload;

      if (state.tags.includes(id)) {
        state.tags = state.tags.filter(curId => curId !== id);
      } else {
        state.tags.push(id)
      }
    },
    addRemoveCategories(state, { payload }) {
      const { id } = payload;

      if (state.categories.includes(id)) {
        state.categories = state.categories.filter(curId => curId !== id);
      } else {
        state.categories.push(id)
      }
    },
    addRemovePublishers(state, { payload }) {
      const { id } = payload;

      if (state.publishers.includes(id)) {
        state.publishers = state.publishers.filter(curId => curId !== id);
      } else {
        state.publishers.push(id)
      }
    },
    addRemoveAvailability(state, { payload: {status} }) {
      if (state.availabilities.includes(status)) {
        state.availabilities = state.availabilities.filter(curStatus => curStatus !== status)
      } else {
        state.availabilities.push(status)
      }
    },
    updatePriceRange(state, { payload }) {
      state.price = payload.range;
    },
    updateRatingRange(state, { payload }) {
      state.rating = payload.range;
    },
    updateSort(state, { payload }) {
      state.sort = payload;
    }
  },
});

export const {
  setFilterFromQuery,
  addSearch,
  clearFilter,
  addRemoveTags,
  addRemoveCategories,
  addRemovePublishers,
  addRemoveAvailability,
  updatePriceRange,
  updateRatingRange,
  updateSort,
} = filterSlice.actions;

export const getTags = (state) => state.filter.tags

export const getPublishers = (state) => state.filter.publishers

export const getSearchText = (state) => state.filter.search;

export const getCategories = (state) => state.filter.categories

export const getPriceRange = (state) => state.filter.price;

export const getRatingRange = (state) => state.filter.rating

export const getSort = (state) => state.filter.sort;

export const getAvailabilities = (state) => state.filter.availabilities;

export const getQueries = ({ filter }) => {
  const query = {
    search: filter.search,
    tags: filter.tags.join(','),
    categories: filter.categories.join(','),
    publishers: filter.publishers.join(','),
    price: filter.price.join('-'),
    rating: filter.rating.join('-'),
    sort: filter.sort,
    availabilities: filter.availabilities.join(',')
  }

  console.log({ own: query })

  for (let key in query) {
    const value = query[key]
    if (
      (Array.isArray(value) && value.length === 0) ||
      !value
    ) {
      delete query[key]
    }
  }

  return query
}

export default filterSlice.reducer;
