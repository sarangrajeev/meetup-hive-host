
import { Club } from "@/types/club";

export const clubs: Club[] = [
  {
    id: "club1",
    name: "Coding Enthusiasts",
    description: "A community of passionate developers and coders who meet regularly to share knowledge, collaborate on projects, and stay updated with the latest technologies.",
    address: "123 Tech Street, Innovation Hub, Silicon Valley",
    contactEmail: "contact@codingenthusiasts.com",
    contactPhone: "555-123-4567",
    socialMedia: {
      twitter: "https://twitter.com/codingenthusiasts",
      facebook: "https://facebook.com/codingenthusiasts",
      linkedin: "https://linkedin.com/company/codingenthusiasts"
    },
    coordinator: {
      name: "Alex Johnson",
      email: "alex@codingenthusiasts.com",
      phone: "555-987-6543"
    },
    members: [
      {
        id: "member1",
        name: "Jane Smith",
        role: "Front-end Developer",
        bio: "Passionate about creating beautiful user interfaces",
        joinedDate: "2022-03-15",
        avatar: "/placeholder.svg"
      },
      {
        id: "member2",
        name: "Mike Wilson",
        role: "Back-end Engineer",
        bio: "Database expert with 5 years of experience",
        joinedDate: "2021-11-20",
        avatar: "/placeholder.svg"
      },
      {
        id: "member3",
        name: "Sarah Lee",
        role: "UI/UX Designer",
        bio: "Creating user-centric design solutions",
        joinedDate: "2023-01-10",
        avatar: "/placeholder.svg"
      }
    ]
  },
  {
    id: "club2",
    name: "Data Science Network",
    description: "A group dedicated to exploring the world of data science, machine learning, and artificial intelligence through workshops, projects, and discussions.",
    address: "456 Analytics Avenue, Data District, Bay Area",
    contactEmail: "info@datasciencenetwork.org",
    contactPhone: "555-765-4321",
    socialMedia: {
      twitter: "https://twitter.com/datasciencenetwork",
      instagram: "https://instagram.com/datasciencenetwork"
    },
    coordinator: {
      name: "Priya Patel",
      email: "priya@datasciencenetwork.org"
    },
    members: [
      {
        id: "member1",
        name: "David Chen",
        role: "Machine Learning Engineer",
        bio: "Working on NLP algorithms and applications",
        joinedDate: "2022-05-12",
        avatar: "/placeholder.svg"
      },
      {
        id: "member2",
        name: "Lisa Wong",
        role: "Data Analyst",
        bio: "Specializing in data visualization and insights",
        joinedDate: "2022-07-23",
        avatar: "/placeholder.svg"
      }
    ]
  },
  {
    id: "club3",
    name: "Blockchain Innovators",
    description: "A forward-thinking club focused on blockchain technology, cryptocurrencies, and decentralized applications. We organize hackathons and educational events.",
    address: "789 Crypto Court, Blockchain Building, New York",
    contactEmail: "hello@blockchaininnovators.net",
    contactPhone: "555-246-8135",
    socialMedia: {
      twitter: "https://twitter.com/blockchaininnovators",
      linkedin: "https://linkedin.com/company/blockchaininnovators"
    },
    coordinator: {
      name: "Marcus Johnson",
      email: "marcus@blockchaininnovators.net",
      phone: "555-369-1478"
    },
    members: [
      {
        id: "member1",
        name: "Emma Rodriguez",
        role: "Smart Contract Developer",
        bio: "Building secure and efficient contracts on Ethereum",
        joinedDate: "2023-02-18",
        avatar: "/placeholder.svg"
      },
      {
        id: "member2",
        name: "Ryan Taylor",
        role: "Cryptocurrency Analyst",
        bio: "Researching market trends and blockchain applications",
        joinedDate: "2022-09-05",
        avatar: "/placeholder.svg"
      }
    ]
  }
];
