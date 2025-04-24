
import { apiService } from '@/lib/api';
import { Event, apiAdapters } from '@/types/api-types';

const EVENT_ENDPOINT = '/events/';

export const eventApi = {
  getAllEvents: async () => {
    const response = await apiService.getAll<Event>(EVENT_ENDPOINT);
    
    if (response.error) {
      return response;
    }
    
    return {
      ...response,
      data: response.data?.map(event => apiAdapters.convertEventFromApi(event))
    };
  },
  
  getEventById: async (id: string | number) => {
    const response = await apiService.getById<Event>(EVENT_ENDPOINT, id);
    
    if (response.error) {
      return response;
    }
    
    return {
      ...response,
      data: response.data ? apiAdapters.convertEventFromApi(response.data) : undefined
    };
  },
  
  createEvent: async (event: Omit<Event, 'id'>) => {
    const apiEvent = apiAdapters.convertEventToApi(event as Event);
    return await apiService.create<typeof apiEvent, Event>(EVENT_ENDPOINT, apiEvent);
  },
  
  updateEvent: async (id: string | number, event: Partial<Event>) => {
    const apiEvent = apiAdapters.convertEventToApi({...(event as Event), id: Number(id)});
    return await apiService.update<typeof apiEvent, Event>(EVENT_ENDPOINT, id, apiEvent);
  },
  
  deleteEvent: async (id: string | number) => {
    return await apiService.delete(EVENT_ENDPOINT, id);
  }
};
