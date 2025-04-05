
export interface Event {
  id: string;
  title: string;
  category: string;
  description: string;
  date: string;
  startTime: string;
  endTime: string;
  location: string;
  locationDetails?: string;
  mustAttend?: boolean;
  organizer: string;
  mapUrl?: string;
  sponsors?: Sponsor[];
  imageUrl?: string;
}

export interface Sponsor {
  name: string;
  level: 'platinum' | 'gold' | 'silver' | 'bronze';
  logoUrl: string;
  website?: string;
}
