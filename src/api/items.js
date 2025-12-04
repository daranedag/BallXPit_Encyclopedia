import apiClient from './client';

export const itemsAPI = {
  // Get all items
  getAll: () => apiClient.get('/items'),

  // Get item by ID
  getById: (id) => apiClient.get(`/items/${id}`),

  // Get items with filters
  getFiltered: (params) => apiClient.get('/items', { params }),

  // Get item evolution chain
  getEvolution: (id) => apiClient.get(`/items/${id}/evolution`),
};
