
import { apiService } from '@/lib/api';
import { Member } from '@/types/api-types';

const MEMBER_ENDPOINT = '/members/';

export const memberApi = {
  getAllMembers: async () => {
    return await apiService.getAll<Member>(MEMBER_ENDPOINT);
  },
  
  getMemberById: async (id: string | number) => {
    return await apiService.getById<Member>(MEMBER_ENDPOINT, id);
  },
  
  createMember: async (member: Omit<Member, 'id'>) => {
    return await apiService.create<Omit<Member, 'id'>, Member>(MEMBER_ENDPOINT, member);
  },
  
  updateMember: async (id: string | number, member: Partial<Member>) => {
    return await apiService.update<Partial<Member>, Member>(MEMBER_ENDPOINT, id, member);
  },
  
  deleteMember: async (id: string | number) => {
    return await apiService.delete(MEMBER_ENDPOINT, id);
  }
};
