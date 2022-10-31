import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchText: "",
  tags: {},
  categories: {},
  priceRange: [10, 5000],
  sortAs: "asc",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    clearFilter: (state) => {
      for (const key in initialState) {
        state[key] = initialState[key];
      }
    },
    addSearch(state, { payload }) {
      state.searchText = payload;
      console.log({ payload });
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
    updatePriceRange(state, { payload }) {
      state.priceRange = payload.range;
    },
    updateSort(state, { paylod }) {
      state.sortAs = paylod;
    },
  },
});

export const {
  addSearch,
  clearFilter,
  addRemoveTags,
  addRemoveCategories,
  updatePriceRange,
  updateSort,
} = filterSlice.actions;

export const getTags = (state) => Object.values(state.filter.tags);

export const getSearchText = (state) => state.filter.searchText;

export const getCategories = (state) => Object.values(state.filter.categories);

export const getPriceRange = (state) => state.filter.priceRange;

export const getSortAs = (state) => state.filter.sortAs;

export default filterSlice.reducer;
