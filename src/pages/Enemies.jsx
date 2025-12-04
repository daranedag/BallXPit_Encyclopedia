import { useState } from 'react';
import { useEnemies } from '../hooks/useEnemies';
import Card from '../components/common/Card';
import Loading from '../components/common/Loading';
import ErrorMessage from '../components/common/ErrorMessage';
import { filterBySearch } from '../utils/helpers';
import './Enemies.css';

const Enemies = () => {
  const { data: enemies, isLoading, isError, error, refetch } = useEnemies();
  const [searchTerm, setSearchTerm] = useState('');

  if (isLoading) return <Loading message="Loading enemies..." />;
  
  if (isError) {
    return <ErrorMessage 
      message={error?.message || 'Failed to load enemies'} 
      onRetry={refetch}
    />;
  }

  const filteredEnemies = searchTerm 
    ? filterBySearch(enemies || [], searchTerm, ['name', 'description'])
    : enemies || [];

  return (
    <div className="enemies-page">
      <div className="page-header">
        <h1 className="page-title">Enemies</h1>
        <p className="page-description">
          Learn about all the enemies in Ball x Pit
        </p>
      </div>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Search enemies..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>

      {filteredEnemies.length === 0 ? (
        <div className="no-results">
          <p>No enemies found matching "{searchTerm}"</p>
        </div>
      ) : (
        <div className="enemies-grid">
          {filteredEnemies.map((enemy) => (
            <Card key={enemy.id} item={enemy} type="enemy" />
          ))}
        </div>
      )}
    </div>
  );
};

export default Enemies;
