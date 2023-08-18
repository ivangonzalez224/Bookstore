import InputBooks from './InputBooks';
import BooksList from './BooksList';

const BooksLogic = () => {
  const books = [
    {
      id: 1,
      categorie: 'Action',
      title: 'The Hunger Games',
      author: 'Suzanne Collins',
      completed: '64%',
      chapter: 'Chapter 17',
    },
    {
      id: 2,
      categorie: 'Science Fiction',
      title: 'Dune',
      author: 'Frank Herbert',
      completed: '8%',
      chapter: 'Chapter 3: "A Lesson Learned"',
    },
    {
      id: 3,
      categorie: 'Economy',
      title: 'Capital in the Twenty-First Century',
      author: 'Suzanne Collins',
      completed: '0%',
      chapter: 'Introduction',
    },
  ];
  return (
    <>
      <BooksList booksProps={books} />
      <InputBooks />
    </>
  );
};
export default BooksLogic;
