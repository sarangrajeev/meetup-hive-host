
import React from "react";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar, Mail, MapPin, Users } from "lucide-react";

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-6 text-center">About MeetupHive</h1>
          
          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-700 mb-6">
              MeetupHive is dedicated to bringing people together through meaningful events and gatherings. 
              We believe that face-to-face interactions create stronger communities and more meaningful connections.
            </p>
            
            <h2 className="text-2xl font-bold mb-4">What We Do</h2>
            <p className="text-gray-700 mb-6">
              Our platform makes it easy to discover and create events in your local area. 
              Whether you're looking to learn new skills, explore shared interests, or simply 
              meet new people, MeetupHive provides the tools and community to make it happen.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="w-12 h-12 bg-meetup-lightGreen rounded-full flex items-center justify-center mx-auto mb-3">
                  <Calendar className="h-6 w-6 text-meetup-green" />
                </div>
                <h3 className="font-bold mb-2">Events</h3>
                <p className="text-gray-600 text-sm">
                  Discover and join events that match your interests
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="w-12 h-12 bg-meetup-lightGreen rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="h-6 w-6 text-meetup-green" />
                </div>
                <h3 className="font-bold mb-2">Community</h3>
                <p className="text-gray-600 text-sm">
                  Connect with like-minded people in your area
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="w-12 h-12 bg-meetup-lightGreen rounded-full flex items-center justify-center mx-auto mb-3">
                  <MapPin className="h-6 w-6 text-meetup-green" />
                </div>
                <h3 className="font-bold mb-2">Local</h3>
                <p className="text-gray-600 text-sm">
                  Focus on local experiences and connections
                </p>
              </div>
            </div>
            
            <h2 className="text-2xl font-bold mb-4">Join Us</h2>
            <p className="text-gray-700 mb-6">
              Ready to start your journey with MeetupHive? Create an account to start 
              hosting events or join existing ones in your community.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/events/create">
                <Button className="w-full sm:w-auto bg-meetup-green hover:bg-meetup-green/90">
                  Host an Event
                </Button>
              </Link>
              <Link to="/explore">
                <Button variant="outline" className="w-full sm:w-auto">
                  Explore Events
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="bg-meetup-green text-white rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <p className="mb-6">
              Have questions or suggestions? We'd love to hear from you!
            </p>
            <a 
              href="mailto:contact@meetuphive.com" 
              className="inline-flex items-center bg-white text-meetup-green px-4 py-2 rounded-md hover:bg-gray-100 transition-colors"
            >
              <Mail className="h-4 w-4 mr-2" />
              contact@meetuphive.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
