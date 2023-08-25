/* eslint-disable camelcase */

import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';
import CircularProgressBar from './CircularProgressBar';

const BooksItem = ({
  item_id, category, title, author, completed, chapter,
}) => {
  const dispatch = useDispatch();
  return (
    <li>
      <div className="data-container">
        <div className="data_list">
          <span id="dataCategory">{category}</span>
          <span id="dataTitle">{title}</span>
          <span id="dataAuthor">{author}</span>
        </div>
        <div className="buttons_list">
          <button type="submit">Comments</button>
          <button
            type="submit"
            onClick={() => {
              const arg = '';
              dispatch(removeBook({
                arg,
                itemBookId: item_id,
              }));
            }}
          >
            Remove
          </button>
          <button type="submit">Edit</button>
        </div>
      </div>
      <div className="progress_mainContainer">
        <CircularProgressBar />
        <div className="progress_dataContainer">
          <div className="progress_completed">
            <span>{completed}</span>
            <span>%</span>
          </div>
          <span id="progressWord">Completed</span>
        </div>
      </div>
      <div className="current_container">
        <div className="current_top">
          <span id="currentWord">CURRENT CHAPTER</span>
          <span id="currentChapter">{chapter}</span>
        </div>
        <button type="submit">UPDATE PROGRESS</button>
      </div>
    </li>
  );
};

BooksItem.propTypes = {
  item_id: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  chapter: PropTypes.string.isRequired,
  completed: PropTypes.string.isRequired,
};

export default BooksItem;
