import { NavLink } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  return (
    <nav className="navigation">
      <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} end>
        Home
      </NavLink>
      <NavLink to="/items" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
        Items
      </NavLink>
      <NavLink to="/balls" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
        Balls
      </NavLink>
      <NavLink to="/enemies" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
        Enemies
      </NavLink>
    </nav>
  );
};

export default Navigation;
