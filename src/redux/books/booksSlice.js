import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  bookItems: [
    {
      itemId: 'item1',
      title: 'The Great Gatsby',
      author: 'John Smith',
      completed: '10%',
      category: 'Fiction',
      chapter: '1',
    },
    {
      itemId: 'item2',
      title: 'Anna Karenina',
      author: 'Leo Tolstoy',
      completed: '8%',
      category: 'Fiction',
      chapter: '2',
    },
    {
      itemId: 'item3',
      title: 'The Selfish Gene',
      author: 'Richard Dawkins',
      completed: '20%',
      category: 'Nonfiction',
      chapter: '4',
    },
  ],
};

const booksSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.bookItems.push(action.payload);
    },
    removeBook: (state, action) => {
      const bookId = action.payload;
      state.bookItems = state.bookItems.filter((item) => item.itemId !== bookId);
    },
  },
});

export const { addBook, removeBook } = booksSlice.actions;
export default booksSlice.reducer;
