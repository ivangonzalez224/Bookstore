import { Route, Routes, NavLink } from 'react-router-dom';
import './App.css';
import Categories from './pages/Categories';
import Books from './pages/Books';
import userIcon from './images/userIcon.png';

const links = [
  { path: '/', text: 'Books' },
  { path: 'categories', text: 'Categories' },
];

const titleStyles = { color: '#0290ff', fontSize: '1.875rem', fontFamily: 'Montserrat-Bold' };

const App = () => (
  <div className="main-container">
    <nav>
      <h1 style={titleStyles}>Bookstore CMS</h1>
      <div className="nav_top">
        <ul>
          {links.map((link) => (
            <li key={link.text}>
              <NavLink to={link.path}>{link.text}</NavLink>
            </li>
          ))}
        </ul>
        <img src={userIcon} alt="user icon" />
      </div>
    </nav>
    <section>
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </section>
  </div>
);

export default App;
