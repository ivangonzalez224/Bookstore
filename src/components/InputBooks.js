import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { createBook } from '../redux/books/booksSlice';

const InputBook = () => {
  const dispatch = useDispatch();
  const [titleValue, setTitleValue] = useState('');
  const [authorValue, setAuthorValue] = useState('');
  const randomCategories = ['Adventure stories', 'Classics', 'Crime',
    'Fantasy', 'Horror', 'Humour and satire', 'Sports'];

  const handleChange = (e) => {
    if (e.target.placeholder === 'Book title') {
      setTitleValue(e.target.value);
    } else {
      setAuthorValue(e.target.value);
    }
  };

  const handleAdd = () => {
    const arg = '';
    const singleCategory = randomCategories[Math.floor(Math.random() * randomCategories.length)];
    const bookObject = {
      item_id: nanoid(),
      title: titleValue,
      author: authorValue,
      category: singleCategory,
    };
    dispatch(createBook({
      arg,
      bookObject,
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
