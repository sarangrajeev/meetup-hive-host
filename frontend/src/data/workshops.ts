
import { Workshop } from "@/types/workshop";
import { clubs } from "./clubs";

export const workshops: Workshop[] = [
  {
    id: "1",
    name: "Introduction to React",
    clubId: clubs[0].id,
    domainTag: "Web Development",
    description: "Learn the basics of React and build your first component",
    date: "2025-05-15",
    startTime: "10:00",
    endTime: "12:00",
    location: "Tech Hub, Building A, Room 101",
    eventInfo: "Bring your laptop with Node.js installed",
    membersHandling: [
      {
        id: "m1",
        name: "John Doe",
        designation: "Lead Instructor"
      },
      {
        id: "m2",
        name: "Jane Smith",
        designation: "Assistant"
      }
    ],
    schedule: [
      {
        id: "s1",
        time: "10:00 - 10:30",
        activity: "Introduction to React concepts"
      },
      {
        id: "s2",
        time: "10:30 - 11:30",
        activity: "Hands-on component building"
      },
      {
        id: "s3",
        time: "11:30 - 12:00",
        activity: "Q&A and wrap-up"
      }
    ],
    rules: [
      "Participants must bring their own laptops",
      "No food or drinks in the lab",
      "Be respectful to all attendees"
    ],
    prerequisites: [
      "Basic HTML, CSS, and JavaScript knowledge",
      "Node.js installed on your laptop",
      "Code editor (VS Code recommended)"
    ],
    attendees: []
  },
  {
    id: "2",
    name: "Machine Learning Fundamentals",
    clubId: clubs[1].id,
    domainTag: "AI & ML",
    description: "Understand the basics of machine learning algorithms",
    date: "2025-05-20",
    startTime: "14:00",
    endTime: "17:00",
    location: "Science Building, Room 303",
    eventInfo: "All materials will be provided",
    membersHandling: [
      {
        id: "m3",
        name: "Michael Johnson",
        designation: "ML Engineer"
      },
      {
        id: "m4",
        name: "Sarah Williams",
        designation: "Data Scientist"
      }
    ],
    schedule: [
      {
        id: "s4",
        time: "14:00 - 15:00",
        activity: "Introduction to ML concepts"
      },
      {
        id: "s5",
        time: "15:00 - 16:30",
        activity: "Practical examples and exercises"
      },
      {
        id: "s6",
        time: "16:30 - 17:00",
        activity: "Discussion and future learning paths"
      }
    ],
    rules: [
      "Registration is mandatory",
      "Arrive 10 minutes before the workshop starts",
      "Questions are encouraged during designated times"
    ],
    prerequisites: [
      "Basic understanding of Python",
      "Familiarity with mathematical concepts",
      "Interest in data science"
    ],
    attendees: []
  },
  {
    id: "3",
    name: "Cybersecurity Basics",
    clubId: clubs[2].id,
    domainTag: "Security",
    description: "Learn essential cybersecurity practices for your digital life",
    date: "2025-05-25",
    startTime: "13:00",
    endTime: "15:30",
    location: "Virtual (Zoom)",
    eventInfo: "Zoom link will be sent after registration",
    membersHandling: [
      {
        id: "m5",
        name: "Robert Chen",
        designation: "Security Expert"
      }
    ],
    schedule: [
      {
        id: "s7",
        time: "13:00 - 13:45",
        activity: "Digital security fundamentals"
      },
      {
        id: "s8",
        time: "13:45 - 14:30",
        activity: "Password management and 2FA"
      },
      {
        id: "s9",
        time: "14:30 - 15:30",
        activity: "Hands-on security practices and Q&A"
      }
    ],
    rules: [
      "Camera optional, microphone recommended",
      "Respect the privacy of other participants",
      "Workshop recording will be available for 1 week"
    ],
    prerequisites: [
      "No prior knowledge required",
      "Computer with internet connection",
      "Zoom application installed"
    ],
    attendees: []
  }
];
