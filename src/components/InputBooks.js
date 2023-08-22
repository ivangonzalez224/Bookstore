import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { addBook } from '../redux/books/booksSlice';

const InputBook = () => {
  const dispatch = useDispatch();
  const [titleValue, setTitleValue] = useState('');
  const [authorValue, setAuthorValue] = useState('');

  const handleChange = (e) => {
    if (e.target.placeholder === 'Book title') {
      setTitleValue(e.target.value);
    } else {
      setAuthorValue(e.target.value);
    }
  };

  const handleAdd = () => {
    dispatch(addBook({
      itemId: nanoid(),
      title: titleValue,
      completed: '0%',
      author: authorValue,
      category: ' ',
      chapter: '1',
    }));
    setTitleValue('');
    setAuthorValue('');
  };

  return (
    <form>
      <h3>ADD NEW BOOK</h3>
      <ul className="form_inputs">
        <li className="input_title">
          <input type="text" value={titleValue} placeholder="Book title" onChange={handleChange} />
        </li>
        <li>
          <input type="text" value={authorValue} placeholder="Author" onChange={handleChange} />
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
