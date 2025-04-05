
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getEventById } from "@/data/events";
import Navbar from "@/components/Navbar";
import EventHeader from "@/components/EventHeader";
import EventDetails from "@/components/EventDetails";
import EventTabs from "@/components/EventTabs";
import EventSponsors from "@/components/EventSponsors";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";

const EventDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const event = getEventById(id || "");

  if (!event) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="container mx-auto px-4 py-12 text-center">
          <h1 className="text-3xl font-bold mb-4">Event Not Found</h1>
          <p className="mb-6">The event you're looking for doesn't exist or has been removed.</p>
          <Button onClick={() => navigate("/")} className="mx-auto">
            Return to Home
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <Button
          variant="outline"
          className="mb-6 flex items-center"
          onClick={() => navigate("/")}
        >
          <ChevronLeft className="h-4 w-4 mr-1" />
          Back to Events
        </Button>
        
        <div className="bg-white rounded-lg shadow-sm p-6">
          <EventHeader event={event} />
          <EventDetails event={event} />
          <EventTabs event={event} />
          <EventSponsors event={event} />
        </div>
      </div>
    </div>
  );
};

export default EventDetail;
