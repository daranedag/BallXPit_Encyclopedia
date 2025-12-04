import { Link, Outlet } from 'react-router-dom';
import Navigation from './Navigation';
import './Layout.css';

const Layout = () => {
  return (
    <div className="layout">
      <header className="header">
        <div className="header-content">
          <Link to="/" className="logo">
            <h1>Ball x Pit Encyclopedia</h1>
          </Link>
          <Navigation />
        </div>
      </header>
      
      <main className="main-content">
        <Outlet />
      </main>
      
      <footer className="footer">
        <p>
          Ball x Pit Encyclopedia - Fan-made project for educational purposes only.
          <br />
          All images and descriptions are property of their respective owners.
        </p>
      </footer>
    </div>
  );
};

export default Layout;
