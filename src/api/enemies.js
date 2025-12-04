import apiClient from './client';

export const enemiesAPI = {
  // Get all enemies
  getAll: () => apiClient.get('/enemies'),

  // Get enemy by ID
  getById: (id) => apiClient.get(`/enemies/${id}`),

  // Get enemies with filters
  getFiltered: (params) => apiClient.get('/enemies', { params }),
};
