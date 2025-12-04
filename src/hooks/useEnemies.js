import { useQuery } from '@tanstack/react-query';
import { enemiesAPI } from '../api/enemies';

export const useEnemies = () => {
  return useQuery({
    queryKey: ['enemies'],
    queryFn: enemiesAPI.getAll,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};

export const useEnemy = (id) => {
  return useQuery({
    queryKey: ['enemies', id],
    queryFn: () => enemiesAPI.getById(id),
    enabled: !!id,
  });
};
