import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchText: "",
  tags: {},
  categories: {},
  publishers: {},
  price: [],
  sort: "",
  availabilities: []
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setStateFromQuery(state, { payload }) {
      console.log({ payload })
      for (const key in payload) {
        const value = payload[key]
        state[key] = value.includes(',') ? value.split(',') : value
        
      }
    },
    clearFilter: (state) => {
      for (const key in initialState) {
        state[key] = initialState[key];
      }
    },
    addSearch(state, { payload }) {
      state.searchText = payload;
    },
    addRemoveTags(state, { payload }) {
      const { id, name } = payload;

      if (id in state.tags) {
        delete state.tags[id];
      } else {
        state.tags[id] = name;
      }
    },
    addRemoveCategories(state, { payload }) {
      const { id, name } = payload;
      console.log({ payload });

      if (id in state.categories) {
        delete state.categories[id];
      } else {
        state.categories[id] = name;
      }
    },
    addRemovePublishers(state, { payload }) {
      const { id, name } = payload;
      console.log({ payload });

      if (id in state.publishers) {
        delete state.publishers[id];
      } else {
        state.publishers[id] = name;
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
    updateSort(state, { payload }) {
      state.sort = payload;
    }
  },
});

export const {
  setStateFromQuery,
  addSearch,
  clearFilter,
  addRemoveTags,
  addRemoveCategories,
  addRemovePublishers,
  addRemoveAvailability,
  updatePriceRange,
  updateSort,
} = filterSlice.actions;

export const getTags = (state) => Object.keys(state.filter.tags)

export const getPublishers = (state) => Object.keys(state.filter.publishers)

export const getSearchText = (state) => state.filter.searchText;

export const getCategories = (state) => Object.keys(state.filter.categories)

export const getPriceRange = (state) => state.filter.price;

export const getSort = (state) => state.filter.sort;

export const getAvailabilities = (state) => state.filter.availabilities;

export const getQuery = ({ filter }) => {
  const query = {
    search: filter.searchText,
    tags: Object.keys(filter.tags),
    categories: Object.keys(filter.categories),
    publishers: Object.keys(filter.publishers),
    price: filter.price,
    sort: filter.sort,
    availabilities: filter.availabilities
  }

  for (let key in query) {
    const value = query[key]
    if (
      (Array.isArray(value) && value.length === 0) ||
      !value
    ) {
      delete query[key]
    }

    if (!query[key]) {
      delete query[key]
    }
  }

  return new URLSearchParams().toString()
}

export default filterSlice.reducer;
