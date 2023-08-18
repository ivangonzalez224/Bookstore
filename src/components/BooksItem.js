import PropTypes from 'prop-types';

const BooksItem = ({ itemProp }) => (
  <li>
    <div className="data-container">
      <div className="data_list">
        <span>{itemProp.categorie}</span>
        <span>{itemProp.title}</span>
        <span>{itemProp.author}</span>
      </div>
      <div className="buttons_list">
        <button type="submit">Comments</button>
        <button type="submit">Remove</button>
        <button type="submit">Edit</button>
      </div>
    </div>
    <div className="progress_mainContainer">
      <div className="progress_dataContainer">
        <span>{itemProp.completed}</span>
        <span>Completed</span>
      </div>
    </div>
    <div className="current_container">
      <div className="current_top">
        <span>CURRENT CHAPTER</span>
        <span>{itemProp.chapter}</span>
      </div>
      <button type="submit">UPDATE PROGRESS</button>
    </div>
  </li>
);

BooksItem.propTypes = {
  itemProp: PropTypes.string.isRequired,
};

export default BooksItem;
