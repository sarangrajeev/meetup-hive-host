
export interface Workshop {
  id: string;
  name: string;
  domainTag: string;
  description: string;
  date: string;
  startTime: string;
  endTime: string;
  location: string;
  eventInfo: string;
  clubId: string;
  memberHandlers: WorkshopMember[];
  schedule: ScheduleItem[];
  rules: string[];
  prerequisites: string[];
}

export interface WorkshopMember {
  name: string;
  designation: string;
}

export interface ScheduleItem {
  time: string;
  activity: string;
}

export interface RSVPRegistration {
  workshopId: string;
  name: string;
  email: string;
  contactNumber: string;
  profession: string;
  willAttend: boolean;
}

export interface ClubMemberRegistration {
  name: string;
  dob: string;
  profession: string;
  language: string;
  address: string;
  city: string;
  mobile: string;
  email: string;
  interests: string[];
  joiningDate: string;
  otherInfo: string;
}
