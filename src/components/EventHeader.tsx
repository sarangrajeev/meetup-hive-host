
import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";
import { Event } from "@/types/event";

interface EventHeaderProps {
  event: Event;
}

const EventHeader: React.FC<EventHeaderProps> = ({ event }) => {
  return (
    <div className="border-b pb-4">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
        <div className="flex-1">
          <h1 className="text-3xl font-bold mb-2">{event.title}</h1>
          <div className="flex flex-wrap gap-2 items-center">
            <Badge variant="outline" className="text-sm">
              {event.category}
            </Badge>
            {event.mustAttend && (
              <div className="bg-meetup-lightGreen text-meetup-green px-3 py-1 rounded-md flex items-center">
                <Star className="h-4 w-4 mr-1" />
                <span className="text-sm font-medium">Must Attend</span>
              </div>
            )}
          </div>
        </div>
        <div className="mt-4 md:mt-0">
          <Button className="bg-meetup-green hover:bg-meetup-green/90">
            Buy Ticket
          </Button>
        </div>
      </div>
      <p className="text-gray-600">{event.description.split('.')[0]}.</p>
    </div>
  );
};

export default EventHeader;
