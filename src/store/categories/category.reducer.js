import { createSlice } from '@reduxjs/toolkit';

export const CATEGORIES_INITIAL_STATE = {
  categories: [],
};

export const categoriesSlice = createSlice ({
  name: 'categories',
  initialState: CATEGORIES_INITIAL_STATE,
  reducers: {
    setCategories (state, action) {
      state.categories = action.payload
    }
  }
})

export const categoriesReducer = categoriesSlice.reducer;

export const { setCategories } = categoriesSlice.actions;

// export const categoriesReducerOld = (
//   state = CATEGORIES_INITIAL_STATE,
//   action = {}
// ) => {
//   const { type, payload } = action;

//   switch (type) {
//     case CATEGORIES_ACTION_TYPES.SET_CATEGORIES:
//       return { ...state, categories: payload };
//     default:
//       return state;
//   }
// };
