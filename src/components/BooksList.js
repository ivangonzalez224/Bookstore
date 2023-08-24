/* eslint-disable react/jsx-props-no-spreading */
import { React, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import BooksItem from './BooksItem';
import { getBooks } from '../redux/books/booksSlice';

const BooksList = () => {
  const dispatch = useDispatch();
  const { bookItems } = useSelector((store) => store.books);

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  if (bookItems.length < 1) {
    return (
      <section className="bookList_container">
        <h2>The book list is currently empty</h2>
      </section>
    );
  }
  return (
    <ul className="bookList_container">
      {bookItems.map((book) => (
        <BooksItem key={book.item_id} {...book} />
      ))}
    </ul>
  );
};

export default BooksList;
