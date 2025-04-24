
import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";
import { Event } from "@/types/api-types";

interface EventHeaderProps {
  event: Event;
  onBuyTicket?: () => void;
}

const EventHeader: React.FC<EventHeaderProps> = ({ event, onBuyTicket }) => {
  return (
    <div className="border-b pb-4 dark:border-gray-700">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
        <div className="flex-1">
          <h1 className="text-3xl font-bold mb-2 dark:text-white">{event.title}</h1>
          <div className="flex flex-wrap gap-2 items-center">
            <Badge variant="outline" className="text-sm dark:border-gray-600 dark:text-gray-300">
              {event.category}
            </Badge>
            {event.must_attend && (
              <div className="bg-meetup-lightGreen text-meetup-green px-3 py-1 rounded-md flex items-center dark:bg-emerald-900 dark:text-emerald-400">
                <Star className="h-4 w-4 mr-1" />
                <span className="text-sm font-medium">Must Attend</span>
              </div>
            )}
          </div>
        </div>
        <div className="mt-4 md:mt-0">
          <Button 
            className="bg-meetup-green hover:bg-meetup-green/90"
            onClick={onBuyTicket}
          >
            Buy Ticket
          </Button>
        </div>
      </div>
      <p className="text-gray-600 dark:text-gray-300">
        {event.description.split('.')[0]}.
      </p>
    </div>
  );
};

export default EventHeader;
