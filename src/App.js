import { Route, Routes } from 'react-router-dom';
import './App.css';
import Categories from './components/pages/Categories';
import Books from './components/pages/Books';
import Navbar from './components/Navbar';

const App = () => (
  <div className="main-container">
    <Navbar />
    <section>
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </section>
  </div>
);

export default App;
