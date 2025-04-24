import { apiService } from '@/lib/api';
import { ApiEvent, apiAdapters } from '@/types/api-types';
import { Event } from '@/types/event';

const EVENT_ENDPOINT = '/events/';

export const eventApi = {
  getAllEvents: async (): Promise<{data?: Event[]; error?: string; status: number}> => {
    const response = await apiService.getAll<ApiEvent>(EVENT_ENDPOINT);
    
    if (response.error) {
      return {
        status: response.status,
        error: response.error
      };
    }
    
    return {
      status: response.status,
      data: response.data?.map(event => ({
        ...apiAdapters.convertEventFromApi(event),
        id: event.id.toString()
      }))
    };
  },
  
  getEventById: async (id: string | number): Promise<{data?: Event; error?: string; status: number}> => {
    const response = await apiService.getById<ApiEvent>(EVENT_ENDPOINT, id);
    
    if (response.error) {
      return {
        status: response.status,
        error: response.error
      };
    }
    
    return {
      status: response.status,
      data: response.data ? {
        ...apiAdapters.convertEventFromApi(response.data),
        id: response.data.id.toString()
      } : undefined
    };
  },
  
  createEvent: async (event: Omit<Event, 'id'>): Promise<{data?: Event; error?: string; status: number}> => {
    const apiEvent = apiAdapters.convertEventToApi(event as Event);
    const response = await apiService.create<typeof apiEvent, ApiEvent>(EVENT_ENDPOINT, apiEvent);
    
    if (response.error) {
      return response;
    }
    
    return {
      status: response.status,
      error: response.error,
      data: response.data ? {
        ...apiAdapters.convertEventFromApi(response.data),
        id: response.data.id.toString()
      } : undefined
    };
  },
  
  updateEvent: async (id: string | number, event: Partial<Event>): Promise<{data?: Event; error?: string; status: number}> => {
    const apiEvent = apiAdapters.convertEventToApi({...(event as Event), id: id.toString()});
    const response = await apiService.update<typeof apiEvent, ApiEvent>(EVENT_ENDPOINT, id, apiEvent);
    
    if (response.error) {
      return response;
    }
    
    return {
      status: response.status,
      error: response.error,
      data: response.data ? {
        ...apiAdapters.convertEventFromApi(response.data),
        id: response.data.id.toString()
      } : undefined
    };
  },
  
  deleteEvent: async (id: string | number): Promise<{error?: string; status: number}> => {
    return await apiService.delete(EVENT_ENDPOINT, id);
  }
};
