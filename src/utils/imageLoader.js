// Image loading utilities
export const getImageUrl = (type, filename) => {
  if (!filename) return '/assets/images/placeholder.png';
  
  // If filename is already a full URL (from backend/Supabase)
  if (filename.startsWith('http://') || filename.startsWith('https://')) {
    return filename;
  }
  
  // Otherwise, use local assets
  return `/assets/images/${type}/${filename}`;
};

export const preloadImage = (src) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
};

export const handleImageError = (e) => {
  e.target.src = '/assets/images/placeholder.png';
};
