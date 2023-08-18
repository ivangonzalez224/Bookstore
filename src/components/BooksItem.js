const BooksItem = ({ itemProp }) => {
    return (
        <li>
            <div className="data-container">
                <span>{itemProp.categorie}</span>
                <span>{itemProp.title}</span>
                <span>{itemProp.author}</span>
                <button>Comments</button>
                <button>Remove</button>
                <button>Edit</button>
            </div>
            <div className="progress-container">
                <span>{itemProp.completed}</span>
                <span>Completed</span>
            </div>
            <div className="current-container">
                <span>CURRENT CHAPTER</span>
                <span>{itemProp.chapter}</span>
                <button>UPDATE PROGRESS</button>
            </div>
        </li>
    );
  };
  export default BooksItem;