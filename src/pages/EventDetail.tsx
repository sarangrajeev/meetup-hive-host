
import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
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
import { getEventById } from "@/data/events";
import { useApiQuery } from "@/hooks/useApiQuery";
import { eventApi } from "@/api/eventApi";
import { Event } from "@/types/api-types";
import { Skeleton } from "@/components/ui/skeleton";

const EventDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  
  // First try to get from API
  const { data: apiEvent, isLoading, error } = useApiQuery<Event>(
    () => eventApi.getEventById(id || ""),
    [id]
  );
  
  // Fallback to static data
  const staticEvent = id ? getEventById(id) : null;
  const event = apiEvent || staticEvent;

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
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
          
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
            <div className="border-b pb-4 dark:border-gray-700">
              <Skeleton className="h-8 w-3/4 mb-3" />
              <Skeleton className="h-4 w-1/4 mb-4" />
              <Skeleton className="h-4 w-full" />
            </div>
            
            <div className="py-4">
              <Skeleton className="h-6 w-1/2 mb-3" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Skeleton className="h-20 w-full" />
                <Skeleton className="h-20 w-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!event) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <Navbar />
        <div className="container mx-auto px-4 py-12 text-center">
          <h1 className="text-3xl font-bold mb-4 dark:text-white">Event Not Found</h1>
          <p className="mb-6 dark:text-gray-300">The event you're looking for doesn't exist or has been removed.</p>
          <Button onClick={() => navigate("/")} className="mx-auto">
            Return to Home
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <Button
          variant="outline"
          className="mb-6 flex items-center dark:border-gray-700 dark:text-white"
          onClick={() => navigate("/workshops")}
        >
          <ChevronLeft className="h-4 w-4 mr-1" />
          Back to Events
        </Button>
        
        <div className="bg-white rounded-lg shadow-sm p-6 dark:bg-gray-800">
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
        <DialogContent className="sm:max-w-[500px] dark:bg-gray-800">
          <DialogHeader>
            <DialogTitle className="dark:text-white">Register for {event.title}</DialogTitle>
            <DialogDescription className="dark:text-gray-300">
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
