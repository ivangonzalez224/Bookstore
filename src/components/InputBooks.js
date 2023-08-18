const InputBook = () => (
  <form>
    <h3>ADD NEW BOOK</h3>
    <ul className="form_inputs">
      <li className="input_title">
        <input type="text" placeholder="Book tile" />
      </li>
      <li>
        <select>
          <option value="1" disabled>Author</option>
          <option value="Suzanne Collins">Suzanne Collins</option>
          <option value="Frank Herbert">Frank Herbert</option>
        </select>
      </li>
      <li>
        <button type="submit">ADD BOOK</button>
      </li>
    </ul>

  </form>
);
export default InputBook;
