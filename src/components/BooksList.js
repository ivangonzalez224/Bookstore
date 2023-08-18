import BooksItem from './BooksItem';

const BooksList = ({ booksProps }) => {
    return (
      <ul>
        {booksProps.map((book) => (
            <BooksItem key={book.id} itemProp={book} />
        ))}
      </ul>
    );
  };

  export default BooksList;