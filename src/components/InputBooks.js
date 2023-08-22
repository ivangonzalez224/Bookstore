import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { addBook } from '../redux/books/booksSlice';

const InputBook = () => {
  const dispatch = useDispatch();
  const [newBook, setNewBook] = useState({
    item_id: nanoid(),
    title: '',
    completed: '0%',
    author: '',
    category: 'no category',
    chapters: '1',
  });

  const handleChange = (e) => {
    const { key, value } = e.target;
    setNewBook((prevBook) => ({
      ...prevBook,
      [key]: value,
    }));
  };

  const handleAdd = () => {
    dispatch(addBook(newBook));
    setNewBook({
      completed: '0%',
      category: 'no category',
      chapters: '1',
    });
  };

  return (
    <form>
      <h3>ADD NEW BOOK</h3>
      <ul className="form_inputs">
        <li className="input_title">
          <input type="text" placeholder="Book title" onChange={handleChange} />
        </li>
        <li>
          <input type="text" placeholder="Author" onChange={handleChange} />
        </li>
        <li>
          <button
            type="button"
            onClick={handleAdd}
          >
            ADD BOOK
          </button>
        </li>
      </ul>
    </form>
  );
};

export default InputBook;
