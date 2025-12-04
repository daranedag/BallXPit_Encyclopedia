import apiClient from './client';

export const ballsAPI = {
  // Get all balls
  getAll: () => apiClient.get('/balls'),

  // Get ball by ID
  getById: (id) => apiClient.get(`/balls/${id}`),

  // Get balls with filters
  getFiltered: (params) => apiClient.get('/balls', { params }),

  // Get ball evolution chain
  getEvolution: (id) => apiClient.get(`/balls/${id}/evolution`),

  // Get ball fusion combinations
  getFusions: (id) => apiClient.get(`/balls/${id}/fusions`),

  // Get all possible fusions
  getAllFusions: () => apiClient.get('/balls/fusions'),
};
