
import { apiService } from '@/lib/api';
import { Glug } from '@/types/api-types';

const GLUG_ENDPOINT = '/glugs/';

export const glugApi = {
  getAllGlugs: async () => {
    return await apiService.getAll<Glug>(GLUG_ENDPOINT);
  },
  
  getGlugById: async (id: string | number) => {
    return await apiService.getById<Glug>(GLUG_ENDPOINT, id);
  },
  
  createGlug: async (glug: Omit<Glug, 'id'>) => {
    return await apiService.create<Omit<Glug, 'id'>, Glug>(GLUG_ENDPOINT, glug);
  },
  
  updateGlug: async (id: string | number, glug: Partial<Glug>) => {
    return await apiService.update<Partial<Glug>, Glug>(GLUG_ENDPOINT, id, glug);
  },
  
  deleteGlug: async (id: string | number) => {
    return await apiService.delete(GLUG_ENDPOINT, id);
  }
};
