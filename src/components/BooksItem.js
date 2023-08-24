import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { booksAction } from '../redux/books/booksSlice';

const BooksItem = ({
  itemId, category, title, author, completed, chapter,
}) => {
  const dispatch = useDispatch();
  return (
    <li>
      <div className="data-container">
        <div className="data_list">
          <span>{category}</span>
          <span>{title}</span>
          <span>{author}</span>
        </div>
        <div className="buttons_list">
          <button type="submit">Comments</button>
          <button
            type="submit"
            onClick={() => {
              dispatch(booksAction.removeBook(itemId));
            }}
          >
            Remove
          </button>
          <button type="submit">Edit</button>
        </div>
      </div>
      <div className="progress_mainContainer">
        <div className="progress_dataContainer">
          <span>{completed}</span>
          <span>Completed</span>
        </div>
      </div>
      <div className="current_container">
        <div className="current_top">
          <span>CURRENT CHAPTER</span>
          <span>{chapter}</span>
        </div>
        <button type="submit">UPDATE PROGRESS</button>
      </div>
    </li>
  );
};

BooksItem.propTypes = {
  itemId: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  chapter: PropTypes.string.isRequired,
  completed: PropTypes.string.isRequired,
};

export default BooksItem;
