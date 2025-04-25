
import React from "react";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar, Mail, MapPin, Users, Globe, Book, Activity } from "lucide-react";

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-6 text-center">About Hacktivist</h1>
          
          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-700 mb-6">
              At its core, Hacktivist connects organizations (within the Hacktivist network) and institutions 
              (external partners such as NGOs or universities) to coordinate joint initiatives, share resources and host
              events. The Alerts module acts as a central hub to broadcast real-time updates across social media,
              email, and messaging platforms, ensuring synchronized communication for campaigns.
            </p>
            
            <h2 className="text-2xl font-bold mb-4">What We Do</h2>
            <p className="text-gray-700 mb-6">
              To incentivize participation, the Stats system gamifies activism through badges, leaderboards, and
              contribution rankings, linked to a Curriculum module that validates members' skills via quizzes and
              certifications. Meanwhile, projects map ongoing work—from software development to advocacy
              campaigns—and highlight dependencies on upstream FOSS (Free and Open-Source Software) tools,
              fostering collaboration across borders.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="w-12 h-12 bg-black/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Calendar className="h-6 w-6 text-black" />
                </div>
                <h3 className="font-bold mb-2">Meetups & Camps</h3>
                <p className="text-gray-600 text-sm">
                  Facilitating physical and virtual collaboration through events, workshops, and global calendars
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="w-12 h-12 bg-black/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="h-6 w-6 text-black" />
                </div>
                <h3 className="font-bold mb-2">Community</h3>
                <p className="text-gray-600 text-sm">
                  Building a network of activists, organizations, and institutions working together
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="w-12 h-12 bg-black/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Globe className="h-6 w-6 text-black" />
                </div>
                <h3 className="font-bold mb-2">Global Impact</h3>
                <p className="text-gray-600 text-sm">
                  Visualizing and measuring campaign impacts and member distribution worldwide
                </p>
              </div>
            </div>
            
            <h2 className="text-2xl font-bold mb-4">Our Approach</h2>
            <p className="text-gray-700 mb-6">
              Physical and virtual collaboration is facilitated through Meetups and Camp, which manage event
              logistics, RSVPs, and workshop materials, all synced to a global calendar. The Commune module
              allocates shared physical spaces, while Maps visualizes geospatial data, such as campaign impacts
              or member distribution.
            </p>
            
            <h2 className="text-2xl font-bold mb-4">Innovation & Resources</h2>
            <p className="text-gray-700 mb-6">
              PPUs (Peer Production Units) incubate activist-driven startups, aligning with Library resources that
              curate hacktivist-friendly books, films, and tools. Finally, campaigns serve as the heartbeat of the
              platform, allowing users to launch, track, and join movements ranging from advocacy for digital
              rights to environmental justice, while measuring their global ripple effects.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Link to="/clubs">
                <Button className="w-full sm:w-auto bg-black hover:bg-black/90">
                  Join Our Clubs
                </Button>
              </Link>
              <Link to="/workshops">
                <Button variant="outline" className="w-full sm:w-auto">
                  Explore Workshops
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="bg-black text-white rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <p className="mb-6">
              Have questions or suggestions? We'd love to hear from you!
            </p>
            <a 
              href="mailto:contact@hacktivist.org" 
              className="inline-flex items-center bg-white text-black px-4 py-2 rounded-md hover:bg-gray-100 transition-colors"
            >
              <Mail className="h-4 w-4 mr-2" />
              contact@hacktivist.org
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
