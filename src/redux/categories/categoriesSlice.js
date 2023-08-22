import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categorieItems: [],
  status: 'Under construction',
};

const categoriesSlice = createSlice({
  name: 'categorie',
  initialState,
  reducers: {
    checkStatus: (state) => {
      state.status = 'Under construction';
    },
  },
});

export const { checkStatus } = categoriesSlice.actions;
export default categoriesSlice.reducer;
