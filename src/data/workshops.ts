
import { Workshop } from "@/types/workshop";

export const workshops: Workshop[] = [
  {
    id: "workshop1",
    name: "Introduction to React",
    domainTag: "Web Development",
    description: "A beginner-friendly workshop to learn the basics of React.js and build your first application.",
    date: "2025-05-15",
    startTime: "10:00",
    endTime: "15:00",
    location: "Tech Hub, Building 4, Silicon Valley",
    eventInfo: "Bring your laptop with Node.js installed. Lunch will be provided.",
    clubId: "club1", // Coding Enthusiasts
    memberHandlers: [
      {
        name: "Jane Smith",
        designation: "Lead Instructor"
      },
      {
        name: "Mike Wilson",
        designation: "Teaching Assistant"
      }
    ],
    schedule: [
      {
        time: "10:00 - 10:30",
        activity: "Introduction and Setup"
      },
      {
        time: "10:30 - 12:00",
        activity: "React Fundamentals"
      },
      {
        time: "12:00 - 13:00",
        activity: "Lunch Break"
      },
      {
        time: "13:00 - 14:30",
        activity: "Building a Todo App"
      },
      {
        time: "14:30 - 15:00",
        activity: "Q&A and Next Steps"
      }
    ],
    rules: [
      "No prior React experience required",
      "Please be on time",
      "Collaborative environment - be respectful to other attendees",
      "Ask questions when you're stuck"
    ],
    prerequisites: [
      "Basic knowledge of HTML, CSS, and JavaScript",
      "Node.js installed on your laptop",
      "Text editor (VS Code recommended)"
    ]
  },
  {
    id: "workshop2",
    name: "Data Visualization with Python",
    domainTag: "Data Science",
    description: "Learn how to create compelling visualizations using popular Python libraries like Matplotlib, Seaborn, and Plotly.",
    date: "2025-05-20",
    startTime: "13:00",
    endTime: "17:00",
    location: "Data Science Lab, Analytics Building, Bay Area",
    eventInfo: "All participants will receive a certificate of completion.",
    clubId: "club2", // Data Science Network
    memberHandlers: [
      {
        name: "David Chen",
        designation: "Workshop Lead"
      },
      {
        name: "Lisa Wong",
        designation: "Data Visualization Expert"
      }
    ],
    schedule: [
      {
        time: "13:00 - 13:30",
        activity: "Introduction to Data Visualization"
      },
      {
        time: "13:30 - 14:30",
        activity: "Matplotlib Basics"
      },
      {
        time: "14:30 - 15:30",
        activity: "Advanced Visualizations with Seaborn"
      },
      {
        time: "15:30 - 15:45",
        activity: "Break"
      },
      {
        time: "15:45 - 16:45",
        activity: "Interactive Dashboards with Plotly"
      },
      {
        time: "16:45 - 17:00",
        activity: "Resources and Conclusion"
      }
    ],
    rules: [
      "Laptops required",
      "Notebooks will be provided via GitHub",
      "Questions encouraged throughout the session"
    ],
    prerequisites: [
      "Basic Python knowledge",
      "Anaconda or Python environment with required libraries",
      "Understanding of basic data structures"
    ]
  },
  {
    id: "workshop3",
    name: "Blockchain Fundamentals",
    domainTag: "Blockchain",
    description: "A comprehensive introduction to blockchain technology, cryptocurrencies, and smart contracts.",
    date: "2025-06-05",
    startTime: "09:00",
    endTime: "16:00",
    location: "Crypto Space, Blockchain Building, New York",
    eventInfo: "This is a full-day workshop with hands-on exercises.",
    clubId: "club3", // Blockchain Innovators
    memberHandlers: [
      {
        name: "Emma Rodriguez",
        designation: "Blockchain Developer"
      },
      {
        name: "Ryan Taylor",
        designation: "Cryptocurrency Expert"
      }
    ],
    schedule: [
      {
        time: "09:00 - 10:00",
        activity: "Blockchain Technology Overview"
      },
      {
        time: "10:00 - 11:30",
        activity: "Cryptocurrencies and Digital Assets"
      },
      {
        time: "11:30 - 12:30",
        activity: "Lunch"
      },
      {
        time: "12:30 - 14:00",
        activity: "Smart Contracts Introduction"
      },
      {
        time: "14:00 - 15:30",
        activity: "Building a Simple Smart Contract"
      },
      {
        time: "15:30 - 16:00",
        activity: "Industry Applications and Future Trends"
      }
    ],
    rules: [
      "Be punctual",
      "Participation in exercises is required",
      "Network and share knowledge with other attendees"
    ],
    prerequisites: [
      "Basic programming knowledge (any language)",
      "Understanding of distributed systems is helpful but not required",
      "Interest in blockchain technology"
    ]
  }
];
