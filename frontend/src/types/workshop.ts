
export interface Workshop {
  id: string;
  name: string;
  clubId: string;
  domainTag: string;
  description: string;
  date: string;
  startTime: string;
  endTime: string;
  location: string;
  eventInfo: string;
  membersHandling: WorkshopMember[];
  schedule: WorkshopScheduleItem[];
  rules: string[];
  prerequisites: string[];
  attendees: WorkshopAttendee[];
}

export interface WorkshopMember {
  id: string;
  name: string;
  designation: string;
}

export interface WorkshopScheduleItem {
  id: string;
  time: string;
  activity: string;
}

export interface WorkshopAttendee {
  id: string;
  name: string;
  email: string;
  phone: string;
  profession: string;
  confirmedAttendance: boolean;
}

export interface ClubMemberRegistration {
  identity: {
    name: string;
    dob: string;
    profession: string;
    language: string;
  };
  contact: {
    address: string;
    city: string;
    mobile: string;
    email: string;
  };
  glugInfo: {
    interests: string[];
    joiningDate: string;
    otherInfo: string;
  };
}
