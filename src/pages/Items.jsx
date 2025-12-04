import { useState } from 'react';
import { useItems } from '../hooks/useItems';
import Card from '../components/common/Card';
import Loading from '../components/common/Loading';
import ErrorMessage from '../components/common/ErrorMessage';
import { filterBySearch } from '../utils/helpers';
import './Items.css';

const Items = () => {
  const { data: items, isLoading, isError, error, refetch } = useItems();
  const [searchTerm, setSearchTerm] = useState('');

  if (isLoading) return <Loading message="Loading items..." />;
  
  if (isError) {
    return <ErrorMessage 
      message={error?.message || 'Failed to load items'} 
      onRetry={refetch}
    />;
  }

  const filteredItems = searchTerm 
    ? filterBySearch(items || [], searchTerm, ['name', 'description'])
    : items || [];

  return (
    <div className="items-page">
      <div className="page-header">
        <h1 className="page-title">Items</h1>
        <p className="page-description">
          Browse all available items in Ball x Pit
        </p>
      </div>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Search items..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>

      {filteredItems.length === 0 ? (
        <div className="no-results">
          <p>No items found matching "{searchTerm}"</p>
        </div>
      ) : (
        <div className="items-grid">
          {filteredItems.map((item) => (
            <Card key={item.id} item={item} type="item" />
          ))}
        </div>
      )}
    </div>
  );
};

export default Items;
