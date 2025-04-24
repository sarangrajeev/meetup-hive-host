
import { apiService } from '@/lib/api';
import { Institution } from '@/types/api-types';

const INSTITUTION_ENDPOINT = '/institutions/';

export const institutionApi = {
  getAllInstitutions: async () => {
    return await apiService.getAll<Institution>(INSTITUTION_ENDPOINT);
  },
  
  getInstitutionById: async (id: string | number) => {
    return await apiService.getById<Institution>(INSTITUTION_ENDPOINT, id);
  },
  
  createInstitution: async (institution: Omit<Institution, 'id'>) => {
    return await apiService.create<Omit<Institution, 'id'>, Institution>(INSTITUTION_ENDPOINT, institution);
  },
  
  updateInstitution: async (id: string | number, institution: Partial<Institution>) => {
    return await apiService.update<Partial<Institution>, Institution>(INSTITUTION_ENDPOINT, id, institution);
  },
  
  deleteInstitution: async (id: string | number) => {
    return await apiService.delete(INSTITUTION_ENDPOINT, id);
  }
};
