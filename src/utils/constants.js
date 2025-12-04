// API endpoints base paths
export const API_PATHS = {
  ITEMS: '/items',
  BALLS: '/balls',
  ENEMIES: '/enemies',
};

// Image types
export const IMAGE_TYPES = {
  ITEM: 'items',
  BALL: 'balls',
  ENEMY: 'enemies',
};

// Query cache times (in milliseconds)
export const CACHE_TIMES = {
  SHORT: 5 * 60 * 1000,  // 5 minutes
  MEDIUM: 10 * 60 * 1000, // 10 minutes
  LONG: 30 * 60 * 1000,   // 30 minutes
};

// App routes
export const ROUTES = {
  HOME: '/',
  ITEMS: '/items',
  ITEM_DETAIL: '/items/:id',
  BALLS: '/balls',
  BALL_DETAIL: '/balls/:id',
  ENEMIES: '/enemies',
  ENEMY_DETAIL: '/enemies/:id',
};
