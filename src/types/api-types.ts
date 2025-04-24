
// Common types
export interface BaseModel {
  id: number;
}

// Models based on Django backend
export interface Glug extends BaseModel {
  glug_name: string;
  description: string;
  organization: string;
  location: string;
  glug_type: string;
  created_at?: string;
  updated_at?: string;
}

export interface GlugMember extends BaseModel {
  glug: number;
  member: number;
  role: string;
  join_date: string;
}

export interface GlugEvent extends BaseModel {
  glug: number;
  event: number;
}

export interface Event extends BaseModel {
  title: string;
  category: string;
  description: string;
  date: string;
  start_time: string;
  end_time: string;
  location: string;
  organizer: string;
  must_attend: boolean;
  map_url?: string;
  sponsors?: EventSponsor[];
}

export interface EventSponsor extends BaseModel {
  name: string;
  level: string;
  logo_url: string;
  website?: string;
}

export interface Member extends BaseModel {
  user: number;
  blood_group?: string;
  gender?: string;
  phone_no?: string;
  city?: string;
  address?: string;
  pincode?: string;
  institution?: number;
  dob?: string;
  glug?: number;
  occupation?: string;
  occupation_details?: string;
}

export interface Institution extends BaseModel {
  name: string;
  location: string;
  institution_type: string;
  glug?: number;
}

export interface Staff extends BaseModel {
  institution: number;
  name: string;
  role: string;
  contact_info?: string;
}

export interface RSVP extends BaseModel {
  event: number;
  member: number;
  status: string;
  response_date: string;
}

export interface Tag extends BaseModel {
  name: string;
  description?: string;
}

// Data adapters to convert between API and frontend formats
export const apiAdapters = {
  // Convert Django API format to frontend format for Event
  convertEventFromApi: (apiEvent: any): Event => {
    return {
      id: apiEvent.id,
      title: apiEvent.title,
      category: apiEvent.category,
      description: apiEvent.description,
      date: apiEvent.date,
      start_time: apiEvent.start_time,
      end_time: apiEvent.end_time,
      location: apiEvent.location,
      organizer: apiEvent.organizer,
      must_attend: apiEvent.must_attend,
      map_url: apiEvent.map_url,
      sponsors: apiEvent.sponsors?.map((s: any) => ({
        id: s.id,
        name: s.name,
        level: s.level,
        logo_url: s.logo_url,
        website: s.website
      }))
    };
  },

  // Convert frontend format to Django API format for Event
  convertEventToApi: (event: Event): any => {
    return {
      id: event.id,
      title: event.title,
      category: event.category,
      description: event.description,
      date: event.date,
      start_time: event.start_time,
      end_time: event.end_time,
      location: event.location,
      organizer: event.organizer,
      must_attend: event.must_attend,
      map_url: event.map_url,
      sponsors: event.sponsors?.map(s => ({
        id: s.id,
        name: s.name,
        level: s.level,
        logo_url: s.logo_url,
        website: s.website
      }))
    };
  }
};
