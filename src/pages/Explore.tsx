
import React from "react";
import { events } from "@/data/events";
import EventCard from "@/components/EventCard";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar, Filter, Plus, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const Explore: React.FC = () => {
  // Create a list of unique categories
  const categories = [...new Set(events.map(event => event.category))];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Explore Events</h1>
            <p className="text-gray-600">
              Find and join exciting meetups in your community
            </p>
          </div>
          <Link to="/events/create" className="mt-4 md:mt-0">
            <Button className="flex items-center bg-meetup-green hover:bg-meetup-green/90">
              <Plus className="h-4 w-4 mr-1" />
              Host Event
            </Button>
          </Link>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 mb-8">
          <div className="lg:w-1/4">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="mb-4">
                <h3 className="font-semibold text-gray-800 mb-3 flex items-center">
                  <Filter className="h-4 w-4 mr-2" /> Filters
                </h3>
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input 
                    placeholder="Search events..." 
                    className="pl-10"
                  />
                </div>
              </div>
              
              <div className="mb-4">
                <h4 className="font-medium text-gray-700 mb-2">Categories</h4>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <div key={category} className="flex items-center">
                      <input 
                        type="checkbox" 
                        id={`category-${category}`} 
                        className="rounded text-meetup-green mr-2"
                      />
                      <label htmlFor={`category-${category}`} className="text-sm">{category}</label>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="mb-4">
                <h4 className="font-medium text-gray-700 mb-2">Date</h4>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input 
                      type="radio" 
                      id="date-any" 
                      name="date" 
                      className="text-meetup-green mr-2"
                      defaultChecked
                    />
                    <label htmlFor="date-any" className="text-sm">Any time</label>
                  </div>
                  <div className="flex items-center">
                    <input 
                      type="radio" 
                      id="date-today" 
                      name="date" 
                      className="text-meetup-green mr-2"
                    />
                    <label htmlFor="date-today" className="text-sm">Today</label>
                  </div>
                  <div className="flex items-center">
                    <input 
                      type="radio" 
                      id="date-week" 
                      name="date" 
                      className="text-meetup-green mr-2"
                    />
                    <label htmlFor="date-week" className="text-sm">This week</label>
                  </div>
                  <div className="flex items-center">
                    <input 
                      type="radio" 
                      id="date-month" 
                      name="date" 
                      className="text-meetup-green mr-2"
                    />
                    <label htmlFor="date-month" className="text-sm">This month</label>
                  </div>
                </div>
              </div>
              
              <Button className="w-full bg-meetup-green hover:bg-meetup-green/90">
                Apply Filters
              </Button>
            </div>
          </div>
          
          <div className="lg:w-3/4">
            {events.length === 0 ? (
              <div className="text-center py-12 bg-white rounded-lg shadow-sm">
                <h2 className="text-xl mb-4">No events match your criteria</h2>
                <p className="mb-6 text-gray-600">
                  Try adjusting your filters or create a new event!
                </p>
                <Link to="/events/create">
                  <Button className="flex items-center mx-auto bg-meetup-green hover:bg-meetup-green/90">
                    <Plus className="h-4 w-4 mr-1" />
                    Host Event
                  </Button>
                </Link>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {events.map((event) => (
                  <EventCard key={event.id} event={event} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
