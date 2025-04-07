
import React from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Code, Globe, MessageSquare, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { events } from "@/data/events";

const Index: React.FC = () => {
  // Get first 3 events for events section
  const upcomingEvents = events.slice(0, 3);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-black text-white py-24">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Start Your FOSS Club Today
            </h1>
            <p className="text-xl mb-8 text-gray-300">
              Create a space for your community to collaborate, learn, and grow together.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/clubs/register">
                <Button className="bg-white text-black hover:bg-gray-200">
                  Create a Club <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/clubs">
                <Button variant="outline" className="border-white text-white hover:bg-white/10">
                  Explore Clubs
                </Button>
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800 max-w-md">
              <div className="text-center">
                <h2 className="text-xl uppercase tracking-wider font-medium mb-1">Social and open technology community</h2>
                <h3 className="text-xl uppercase tracking-wider font-medium mb-4">Pondicherry University</h3>
                <img
                  src="/lovable-uploads/c2a961d6-dffb-41de-a971-97c3c4d306c5.png"
                  alt="FOSS Club Logo"
                  className="mx-auto w-48 h-48 object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Forums Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Join the Conversation</h2>
          <p className="text-xl text-gray-600 text-center mb-12">
            Engage with the community in our forums and discussion boards.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((num) => (
              <Card key={num} className="border border-gray-200 hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-3">
                    <MessageSquare className="h-5 w-5 text-gray-500 mr-2" />
                    <span className="text-sm text-gray-500">{10 + num * 3} replies</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Discussion Topic {num}</h3>
                  <p className="text-gray-600 mb-6">
                    Join the discussion on important topics in the free software community.
                  </p>
                  <Link to="/forum" className="flex justify-end">
                    <Button variant="outline" className="mt-2">
                      Join Discussion <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="flex justify-center mt-8">
            <Link to="/forum">
              <Button variant="outline" className="mx-auto">
                Visit Forum
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Upcoming Events</h2>
          <p className="text-xl text-gray-600 text-center mb-12">
            Connect with the community at these upcoming free software events.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {upcomingEvents.map((event, index) => (
              <Card key={event.id} className="border border-gray-200 hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-3">
                    <Calendar className="h-5 w-5 text-gray-500 mr-2" />
                    <span className="text-sm text-gray-500">{`4/${7 + index}/2025`}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">FOSS Workshop {index + 1}</h3>
                  <p className="text-gray-600 mb-6">
                    Learn about the latest developments in free and open source software and how to contribute.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Users className="h-5 w-5 text-gray-500 mr-2" />
                      <span className="text-sm text-gray-500">{25 + index * 5} attendees</span>
                    </div>
                    <Link to={`/events/${event.id}`}>
                      <Button>Register</Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="flex justify-center mt-8">
            <Link to="/explore">
              <Button variant="outline" className="mx-auto">
                View All Events
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Clubs Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Discover FOSS Clubs</h2>
          <p className="text-xl text-gray-600 text-center mb-12">
            Join a thriving ecosystem of free software communities around the world.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((num) => (
              <Card key={num} className="border border-gray-200 hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">FOSS Club {num}</h3>
                  <p className="text-gray-600 mb-6">
                    A community dedicated to promoting and developing free and open source software.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Users className="h-5 w-5 text-gray-500 mr-2" />
                      <span className="text-sm text-gray-500">{60 + num * 10} members</span>
                    </div>
                    <Link to={`/clubs/${num}`}>
                      <Button variant="outline" size="sm">
                        View <ArrowRight className="ml-1 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="flex justify-center mt-8">
            <Link to="/clubs">
              <Button variant="outline" className="mx-auto">
                View All Clubs
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Everything Your FOSS Club Needs</h2>
          <p className="text-xl text-gray-600 text-center mb-12">
            A complete platform designed to help free software communities thrive and grow.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-shrink-0">
                <Users className="h-8 w-8 text-black" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Club Management</h3>
                <p className="text-gray-600">
                  Create and manage your club profile, add members, and organize your team structure.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-shrink-0">
                <Calendar className="h-8 w-8 text-black" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Event Organization</h3>
                <p className="text-gray-600">
                  Plan, promote, and manage events with built-in registration and attendance tracking.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-shrink-0">
                <Code className="h-8 w-8 text-black" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Resource Sharing</h3>
                <p className="text-gray-600">
                  Share code, documentation, presentations, and learning materials with your community.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-shrink-0">
                <MessageSquare className="h-8 w-8 text-black" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Community Forum</h3>
                <p className="text-gray-600">
                  Engage in discussions, ask questions, and collaborate with other FOSS enthusiasts.
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-12 flex justify-center">
            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800 max-w-md">
              <div className="text-center text-white">
                <h2 className="text-xl uppercase tracking-wider font-medium mb-1">Social and open technology community</h2>
                <h3 className="text-xl uppercase tracking-wider font-medium mb-4">Pondicherry University</h3>
                <img
                  src="/lovable-uploads/c2a961d6-dffb-41de-a971-97c3c4d306c5.png"
                  alt="FOSS Club Logo"
                  className="mx-auto w-48 h-48 object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-6">
              Connect, Collaborate, Create with Free Software
            </h2>
            <p className="text-xl text-center mb-8 text-gray-300">
              Hacktivist is a platform for free software clubs to organize, share resources, and grow their communities.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/clubs/register">
                <Button className="bg-white text-black hover:bg-gray-200">
                  Start a Club <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/clubs">
                <Button variant="outline" className="border-white text-white hover:bg-white/10">
                  Explore Clubs
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <Globe className="h-6 w-6 text-black" />
              <span className="text-xl font-bold">Hacktivist</span>
            </div>
            
            <div className="text-sm text-gray-500">
              © 2025 Hacktivist. All rights reserved.
            </div>
            
            <div className="flex gap-4 mt-4 md:mt-0">
              <Link to="/terms" className="text-sm text-gray-500 hover:text-gray-700">
                Terms
              </Link>
              <Link to="/privacy" className="text-sm text-gray-500 hover:text-gray-700">
                Privacy
              </Link>
              <Link to="/contact" className="text-sm text-gray-500 hover:text-gray-700">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
