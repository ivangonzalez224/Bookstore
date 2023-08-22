import { NavLink } from 'react-router-dom';
import userIcon from './images/userIcon.png';

const links = [
  { path: '/', text: 'Books' },
  { path: 'categories', text: 'Categories' },
];

const Navbar = () => (
  <nav>
    <h1>Bookstore CMS</h1>
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
);

export default Navbar;
