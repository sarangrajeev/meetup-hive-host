
import { apiService } from '@/lib/api';
import { ApiEvent, apiAdapters } from '@/types/api-types';
import { Event } from '@/types/event';

const EVENT_ENDPOINT = '/events/';

export const eventApi = {
  getAllEvents: async (): Promise<{data?: Event[]; error?: string; status: number}> => {
    const response = await apiService.getAll<ApiEvent>(EVENT_ENDPOINT);
    
    if (response.error) {
      return response;
    }
    
    return {
      ...response,
      data: response.data?.map(event => apiAdapters.convertEventFromApi(event))
    };
  },
  
  getEventById: async (id: string | number): Promise<{data?: Event; error?: string; status: number}> => {
    const response = await apiService.getById<ApiEvent>(EVENT_ENDPOINT, id);
    
    if (response.error) {
      return response;
    }
    
    return {
      ...response,
      data: response.data ? apiAdapters.convertEventFromApi(response.data) : undefined
    };
  },
  
  createEvent: async (event: Omit<Event, 'id'>): Promise<{data?: Event; error?: string; status: number}> => {
    const apiEvent = apiAdapters.convertEventToApi(event as Event);
    const response = await apiService.create<typeof apiEvent, ApiEvent>(EVENT_ENDPOINT, apiEvent);
    
    if (response.error) {
      return response;
    }
    
    return {
      ...response,
      data: response.data ? apiAdapters.convertEventFromApi(response.data) : undefined
    };
  },
  
  updateEvent: async (id: string | number, event: Partial<Event>): Promise<{data?: Event; error?: string; status: number}> => {
    const apiEvent = apiAdapters.convertEventToApi({...(event as Event), id: id.toString()});
    const response = await apiService.update<typeof apiEvent, ApiEvent>(EVENT_ENDPOINT, id, apiEvent);
    
    if (response.error) {
      return response;
    }
    
    return {
      ...response,
      data: response.data ? apiAdapters.convertEventFromApi(response.data) : undefined
    };
  },
  
  deleteEvent: async (id: string | number): Promise<{error?: string; status: number}> => {
    return await apiService.delete(EVENT_ENDPOINT, id);
  }
};
