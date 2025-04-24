
import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getEventById } from "@/data/events";
import Navbar from "@/components/Navbar";
import EventHeader from "@/components/EventHeader";
import EventDetails from "@/components/EventDetails";
import EventTabs from "@/components/EventTabs";
import EventSponsors from "@/components/EventSponsors";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { WorkshopRSVPForm } from "@/components/WorkshopRSVPForm";

const EventDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const event = getEventById(id || "");
  const [isDialogOpen, setIsDialogOpen] = useState(false);

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
          onClick={() => navigate("/workshops")}
        >
          <ChevronLeft className="h-4 w-4 mr-1" />
          Back to Events
        </Button>
        
        <div className="bg-white rounded-lg shadow-sm p-6">
          <EventHeader 
            event={event} 
            onBuyTicket={() => setIsDialogOpen(true)}
          />
          <EventDetails event={event} />
          <EventTabs event={event} />
          <EventSponsors event={event} />
        </div>
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Register for {event.title}</DialogTitle>
            <DialogDescription>
              Fill in your details to register for this event
            </DialogDescription>
          </DialogHeader>
          <WorkshopRSVPForm workshopId={event.id} />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default EventDetail;
