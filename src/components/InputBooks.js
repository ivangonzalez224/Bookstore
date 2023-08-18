const InputBook = () => {
    return (
        <form>
          <input type="text" placeholder="Add Todo..." />
          <select>
            <option value="1" disabled>Author</option>
            <option value="Suzanne Collins">Suzanne Collins</option>
            <option value="Frank Herbert">Frank Herbert</option>  
          </select>
          <button>ADD BOOK</button>
        </form>
      );
  };
  export default InputBook;