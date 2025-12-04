import { Link } from 'react-router-dom';
import { getImageUrl, handleImageError } from '../../utils/imageLoader';
import { IMAGE_TYPES } from '../../utils/constants';
import './Card.css';

const Card = ({ item, type }) => {
  const imageType = type === 'item' ? IMAGE_TYPES.ITEM : 
                    type === 'ball' ? IMAGE_TYPES.BALL : 
                    IMAGE_TYPES.ENEMY;
  
  const detailPath = `/${type}s/${item.id}`;
  
  return (
    <Link to={detailPath} className="card">
      <div className="card-image">
        <img 
          src={getImageUrl(imageType, item.image)} 
          alt={item.name}
          onError={handleImageError}
          loading="lazy"
        />
      </div>
      <div className="card-content">
        <h3 className="card-title">{item.name}</h3>
        {item.description && (
          <p className="card-description">
            {item.description.length > 100 
              ? `${item.description.substring(0, 100)}...` 
              : item.description}
          </p>
        )}
      </div>
    </Link>
  );
};

export default Card;
