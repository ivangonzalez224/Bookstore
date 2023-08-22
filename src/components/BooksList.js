/* eslint-disable react/jsx-props-no-spreading */
import { useSelector } from 'react-redux';
import BooksItem from './BooksItem';

const BooksList = () => {
  const { bookItems } = useSelector((store) => store.books);

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
        <BooksItem key={book.id} {...book} />
      ))}
    </ul>
  );
};

export default BooksList;
