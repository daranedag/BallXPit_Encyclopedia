import { useState } from 'react';
import { useBalls } from '../hooks/useBalls';
import Card from '../components/common/Card';
import Loading from '../components/common/Loading';
import ErrorMessage from '../components/common/ErrorMessage';
import { filterBySearch } from '../utils/helpers';
import './Balls.css';

const Balls = () => {
  const { data: balls, isLoading, isError, error, refetch } = useBalls();
  const [searchTerm, setSearchTerm] = useState('');

  if (isLoading) return <Loading message="Loading balls..." />;
  
  if (isError) {
    return <ErrorMessage 
      message={error?.message || 'Failed to load balls'} 
      onRetry={refetch}
    />;
  }

  const filteredBalls = searchTerm 
    ? filterBySearch(balls || [], searchTerm, ['name', 'description'])
    : balls || [];

  return (
    <div className="balls-page">
      <div className="page-header">
        <h1 className="page-title">Balls</h1>
        <p className="page-description">
          Discover all balls, their evolutions, and fusion combinations
        </p>
      </div>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Search balls..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>

      {filteredBalls.length === 0 ? (
        <div className="no-results">
          <p>No balls found matching "{searchTerm}"</p>
        </div>
      ) : (
        <div className="balls-grid">
          {filteredBalls.map((ball) => (
            <Card key={ball.id} item={ball} type="ball" />
          ))}
        </div>
      )}
    </div>
  );
};

export default Balls;
