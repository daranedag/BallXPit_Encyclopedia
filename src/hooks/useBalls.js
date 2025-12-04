import { useQuery } from '@tanstack/react-query';
import { ballsAPI } from '../api/balls';

export const useBalls = () => {
  return useQuery({
    queryKey: ['balls'],
    queryFn: ballsAPI.getAll,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};

export const useBall = (id) => {
  return useQuery({
    queryKey: ['balls', id],
    queryFn: () => ballsAPI.getById(id),
    enabled: !!id,
  });
};

export const useBallEvolution = (id) => {
  return useQuery({
    queryKey: ['balls', id, 'evolution'],
    queryFn: () => ballsAPI.getEvolution(id),
    enabled: !!id,
  });
};

export const useBallFusions = (id) => {
  return useQuery({
    queryKey: ['balls', id, 'fusions'],
    queryFn: () => ballsAPI.getFusions(id),
    enabled: !!id,
  });
};

export const useAllFusions = () => {
  return useQuery({
    queryKey: ['balls', 'fusions'],
    queryFn: ballsAPI.getAllFusions,
    staleTime: 10 * 60 * 1000, // 10 minutes
  });
};
