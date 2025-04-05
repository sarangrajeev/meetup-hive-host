
import React from "react";
import { Calendar, Clock, MapPin } from "lucide-react";
import { format } from "date-fns";
import { Event } from "@/types/event";
import { Button } from "@/components/ui/button";

interface EventDetailsProps {
  event: Event;
}

const EventDetails: React.FC<EventDetailsProps> = ({ event }) => {
  const formattedDate = () => {
    try {
      const date = new Date(event.date);
      return format(date, "EEEE, d MMMM yyyy");
    } catch (error) {
      return event.date;
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-6">
      <div className="flex items-start">
        <Calendar className="h-5 w-5 mr-3 mt-1" />
        <div>
          <h3 className="text-lg font-semibold">{formattedDate()}</h3>
          <p className="text-gray-600">{event.date}</p>
        </div>
      </div>
      <div className="flex items-start">
        <Clock className="h-5 w-5 mr-3 mt-1" />
        <div>
          <h3 className="text-lg font-semibold">Starts at {event.startTime}</h3>
          <p className="text-gray-600">Ends at {event.endTime}</p>
        </div>
      </div>
      <div className="flex items-start">
        <MapPin className="h-5 w-5 mr-3 mt-1" />
        <div>
          <h3 className="text-lg font-semibold">{event.location}</h3>
          {event.mapUrl && (
            <a
              href={event.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              View on map
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
