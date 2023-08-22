import { useSelector } from 'react-redux';

const CategoriesList = () => {
  const { status } = useSelector((store) => store.categories);
  return (
    <h2>{status}</h2>
  );
};

export default CategoriesList;
