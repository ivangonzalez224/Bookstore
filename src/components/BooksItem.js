import { useDispatch } from 'react-redux';
import { removeBook } from '../features/books/booksSlice';

const BooksItem = ({
  id, categorie, title, author, completed, chapter,
}) => {
  const dispatch = useDispatch();
  return (
    <li>
      <div className="data-container">
        <div className="data_list">
          <span>{categorie}</span>
          <span>{title}</span>
          <span>{author}</span>
        </div>
        <div className="buttons_list">
          <button type="submit">Comments</button>
          <button
            type="submit"
            onClick={() => {
              dispatch(removeBook(id));
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

export default BooksItem;
