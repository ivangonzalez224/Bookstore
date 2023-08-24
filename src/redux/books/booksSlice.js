import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getBooks = createAsyncThunk(
  'books/getBooks',
  async (arg, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/JX6HgfhVoknuk7ZGztbn/books',
      );
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const createBook = createAsyncThunk(
  'books/createBook',
  async (payload, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/JX6HgfhVoknuk7ZGztbn/books',
        payload.bookObject,
      );
      if (!response) {
        return Error('Error when creating a new book.');
      }
      return payload.bookObject;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const initialState = {
  bookItems: [],
  error: '',
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
  extraReducers: (builder) => {
    builder.addCase(getBooks.fulfilled, (state, action) => {
      state.bookItems = action.payload;
    });
    builder.addCase(getBooks.rejected, (state, action) => {
      state.error = action.payload;
    });
    builder.addCase(createBook.fulfilled, (state, action) => {
      state.bookItems.push(action.payload);
    });
  },
});

export const booksAction = booksSlice.actions;
export default booksSlice.reducer;
