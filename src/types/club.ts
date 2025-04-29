
export interface Club {
  id: string;
  name: string;
  description: string;
  address: string;
  contactEmail: string;
  contactPhone: string;
  socialMedia: {
    twitter?: string;
    facebook?: string;
    instagram?: string;
    linkedin?: string;
  };
  coordinator: {
    name: string;
    email: string;
    phone?: string;
  };
  members: ClubMember[];
}

export interface ClubMember {
  id: string;
  name: string;
  role: string;
  bio?: string;
  joinedDate: string;
  avatar?: string;
}
