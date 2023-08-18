import PropTypes from 'prop-types';
import BooksItem from './BooksItem';

const BooksList = ({ booksProps }) => (
  <ul className="bookList_container">
    {booksProps.map((book) => (
      <BooksItem key={book.id} itemProp={book} />
    ))}
  </ul>
);

BooksList.propTypes = {
  booksProps: PropTypes.string.isRequired,
};

export default BooksList;
