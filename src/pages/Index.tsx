
import React from "react";
import { events } from "@/data/events";
import EventCard from "@/components/EventCard";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar, MapPin, Plus, Search, TrendingUp, Users } from "lucide-react";
import { Input } from "@/components/ui/input";

const Index: React.FC = () => {
  // Get first 6 events for featured section
  const featuredEvents = events.slice(0, 6);
  
  // Create a list of unique categories
  const categories = [...new Set(events.map(event => event.category))];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-meetup-green/90 to-emerald-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Find your next favorite event
              </h1>
              <p className="text-lg mb-8 max-w-lg">
                Join exciting hackathons, workshops, and gatherings in your community. 
                Connect with like-minded people and expand your network.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/events/create">
                  <Button className="w-full sm:w-auto bg-white text-meetup-green hover:bg-gray-100">
                    Host an Event
                  </Button>
                </Link>
                <Link to="/explore">
                  <Button variant="outline" className="w-full sm:w-auto border-white text-white hover:bg-white/10">
                    Explore Events
                  </Button>
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
                <h3 className="font-semibold text-gray-800 mb-4">Find Events Near You</h3>
                <div className="flex flex-col gap-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input 
                      placeholder="Search events..." 
                      className="pl-10"
                    />
                  </div>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input 
                      placeholder="Location" 
                      className="pl-10"
                    />
                  </div>
                  <Button className="w-full bg-meetup-green hover:bg-meetup-green/90">
                    Search
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Browse by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category) => (
              <Link to={`/category/${category}`} key={category}>
                <div className="bg-gray-50 hover:bg-gray-100 transition-colors rounded-lg p-4 text-center">
                  <div className="w-12 h-12 bg-meetup-lightGreen rounded-full flex items-center justify-center mx-auto mb-3">
                    <Calendar className="h-6 w-6 text-meetup-green" />
                  </div>
                  <span className="font-medium text-gray-700">{category}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Events Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">Featured Events</h2>
            <Link to="/explore" className="text-meetup-green hover:text-meetup-green/80 font-medium flex items-center">
              View all <TrendingUp className="ml-1 h-4 w-4" />
            </Link>
          </div>

          {featuredEvents.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-lg shadow-sm">
              <h2 className="text-xl mb-4">No events scheduled yet</h2>
              <p className="mb-6 text-gray-600">
                Be the first to host an event in your community!
              </p>
              <Link to="/events/create">
                <Button className="flex items-center mx-auto bg-meetup-green hover:bg-meetup-green/90">
                  <Plus className="h-4 w-4 mr-1" />
                  Host Event
                </Button>
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="w-12 h-12 bg-meetup-lightGreen rounded-full flex items-center justify-center mx-auto mb-3">
                <Calendar className="h-6 w-6 text-meetup-green" />
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-2">{events.length}+</h3>
              <p className="text-gray-600">Active Events</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="w-12 h-12 bg-meetup-lightGreen rounded-full flex items-center justify-center mx-auto mb-3">
                <Users className="h-6 w-6 text-meetup-green" />
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-2">5,000+</h3>
              <p className="text-gray-600">Community Members</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="w-12 h-12 bg-meetup-lightGreen rounded-full flex items-center justify-center mx-auto mb-3">
                <MapPin className="h-6 w-6 text-meetup-green" />
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-2">20+</h3>
              <p className="text-gray-600">Cities Covered</p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="bg-meetup-green text-white rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
            <p className="max-w-2xl mx-auto mb-6">
              Subscribe to our newsletter to get updates on the latest events and community news
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input 
                placeholder="Your email address" 
                className="bg-white/90 border-0 placeholder:text-gray-500"
              />
              <Button className="bg-white text-meetup-green hover:bg-gray-100">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
