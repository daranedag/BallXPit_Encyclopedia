// Format text helpers
export const capitalize = (str) => {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

export const truncate = (str, maxLength = 100) => {
  if (!str || str.length <= maxLength) return str;
  return str.slice(0, maxLength) + '...';
};

// Search/filter helpers
export const filterBySearch = (items, searchTerm, fields = ['name', 'description']) => {
  if (!searchTerm) return items;
  
  const lowerSearch = searchTerm.toLowerCase();
  return items.filter(item =>
    fields.some(field => 
      item[field]?.toLowerCase().includes(lowerSearch)
    )
  );
};

// Sort helpers
export const sortByName = (a, b) => {
  return (a.name || '').localeCompare(b.name || '');
};

export const sortById = (a, b) => {
  return (a.id || 0) - (b.id || 0);
};
