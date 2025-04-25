
import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Calendar, Clock, MapPin, Star } from "lucide-react";
import { Event } from "@/types/event";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { format, parse } from "date-fns";

interface EventCardProps {
  event: Event;
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  const formattedDate = () => {
    try {
      const date = new Date(event.date);
      return format(date, "EEEE, d MMMM yyyy");
    } catch (error) {
      return event.date;
    }
  };

  return (
    <Card className="h-full hover:shadow-md transition-shadow">
      <CardHeader className="p-4 pb-2">
        <div className="flex justify-between items-start">
          <div>
            <Badge variant="outline" className="mb-2">
              {event.category}
            </Badge>
            <h3 className="text-xl font-bold">{event.title}</h3>
          </div>
          {event.mustAttend && (
            <div className="bg-meetup-lightGreen text-meetup-green px-3 py-1 rounded-md flex items-center">
              <Star className="h-4 w-4 mr-1" />
              <span className="text-sm font-medium">Must Attend</span>
            </div>
          )}
        </div>
      </CardHeader>
      <CardContent className="p-4 pt-2 flex flex-col space-y-3">
        <p className="text-sm text-gray-600 line-clamp-2">
          {event.description}
        </p>
        <div className="flex items-center text-sm">
          <Calendar className="h-4 w-4 mr-2" />
          <span>{formattedDate()}</span>
        </div>
        <div className="flex items-center text-sm">
          <Clock className="h-4 w-4 mr-2" />
          <span>
            {event.startTime} - {event.endTime}
          </span>
        </div>
        <div className="flex items-center text-sm">
          <MapPin className="h-4 w-4 mr-2" />
          <span>{event.location}</span>
        </div>
        <div className="pt-3">
          <Link to={`/events/${event.id}`}>
            <Button className="w-full bg-meetup-green hover:bg-meetup-green/90">
              View Details
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default EventCard;
