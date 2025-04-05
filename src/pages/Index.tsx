
import React from "react";
import { events } from "@/data/events";
import EventCard from "@/components/EventCard";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Plus } from "lucide-react";

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Upcoming Events</h1>
            <p className="text-gray-600">
              Discover and join exciting meetups in your community
            </p>
          </div>
          <Link to="/events/create" className="mt-4 md:mt-0">
            <Button className="flex items-center bg-meetup-green hover:bg-meetup-green/90">
              <Plus className="h-4 w-4 mr-1" />
              Host Event
            </Button>
          </Link>
        </div>

        {events.length === 0 ? (
          <div className="text-center py-12">
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
            {events.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
