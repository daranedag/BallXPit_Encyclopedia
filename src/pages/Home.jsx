import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <h1 className="hero-title">Welcome to Ball x Pit Encyclopedia</h1>
        <p className="hero-subtitle">
          Your comprehensive guide to all items, balls, and enemies in Ball x Pit
        </p>
      </section>

      <section className="categories">
        <Link to="/items" className="category-card">
          <div className="category-icon">🎒</div>
          <h2>Items</h2>
          <p>Discover all items and their evolutions</p>
        </Link>

        <Link to="/balls" className="category-card">
          <div className="category-icon">⚽</div>
          <h2>Balls</h2>
          <p>Explore balls, their evolutions, and fusion combinations</p>
        </Link>

        <Link to="/enemies" className="category-card">
          <div className="category-icon">👾</div>
          <h2>Enemies</h2>
          <p>Learn about all the enemies you'll encounter</p>
        </Link>
      </section>

      <section className="features">
        <h2 className="features-title">Features</h2>
        <div className="features-grid">
          <div className="feature">
            <h3>🔍 Search & Filter</h3>
            <p>Easily find any item, ball, or enemy</p>
          </div>
          <div className="feature">
            <h3>🧬 Evolution Trees</h3>
            <p>View complete evolution chains</p>
          </div>
          <div className="feature">
            <h3>🔗 Fusion Charts</h3>
            <p>Discover all ball fusion combinations</p>
          </div>
          <div className="feature">
            <h3>📖 Detailed Info</h3>
            <p>Complete descriptions and statistics</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
