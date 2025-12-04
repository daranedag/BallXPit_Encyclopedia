import { useQuery } from '@tanstack/react-query';
import { itemsAPI } from '../api/items';

export const useItems = () => {
  return useQuery({
    queryKey: ['items'],
    queryFn: itemsAPI.getAll,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};

export const useItem = (id) => {
  return useQuery({
    queryKey: ['items', id],
    queryFn: () => itemsAPI.getById(id),
    enabled: !!id,
  });
};

export const useItemEvolution = (id) => {
  return useQuery({
    queryKey: ['items', id, 'evolution'],
    queryFn: () => itemsAPI.getEvolution(id),
    enabled: !!id,
  });
};
