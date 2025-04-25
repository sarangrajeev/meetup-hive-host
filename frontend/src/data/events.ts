
import { Event } from "@/types/event";

export const events: Event[] = [
  {
    id: "1",
    title: "MumbaiFOSS 2025",
    category: "CityFOSS Conference",
    description: "MumbaiFOSS is an annual Free and Open Source Software Conference (FOSS), with the aim of uniting the FOSS community of Mumbai, fostering collaboration and knowledge sharing.",
    date: "2025-04-19",
    startTime: "10:00 AM",
    endTime: "5:30 PM",
    location: "MPSTME, NMIMS",
    organizer: "FOSS Mumbai Community",
    mustAttend: true,
    mapUrl: "https://www.openstreetmap.org/way/1170351971",
    sponsors: [
      {
        name: "Compossible Umwelten",
        level: "platinum",
        logoUrl: "/lovable-uploads/c3d2859d-d468-47bb-8589-6dd430d6f1cb.png",
        website: "https://example.com"
      },
      {
        name: "Skyflo.ai",
        level: "platinum",
        logoUrl: "/lovable-uploads/c3d2859d-d468-47bb-8589-6dd430d6f1cb.png",
        website: "https://example.com"
      }
    ]
  },
  {
    id: "2",
    title: "React Developers Meetup",
    category: "Tech Meetup",
    description: "Join us for a day of React talks, workshops, and networking with fellow React developers. We'll cover the latest trends, best practices, and exciting new features in the React ecosystem.",
    date: "2025-05-15",
    startTime: "11:00 AM",
    endTime: "4:00 PM",
    location: "TechHub Coworking Space",
    organizer: "React Mumbai Group",
    sponsors: [
      {
        name: "TechCorp",
        level: "gold",
        logoUrl: "/placeholder.svg",
        website: "https://example.com"
      }
    ]
  },
  {
    id: "3",
    title: "Python Enthusiasts Gathering",
    category: "Coding Workshop",
    description: "A monthly meetup for Python programmers of all levels. This session will focus on data analysis with pandas and visualization with matplotlib.",
    date: "2025-04-25",
    startTime: "6:00 PM",
    endTime: "8:30 PM",
    location: "DataCenter Office",
    organizer: "Python Mumbai Community",
    sponsors: []
  }
];

export const getEventById = (id: string): Event | undefined => {
  return events.find(event => event.id === id);
};
