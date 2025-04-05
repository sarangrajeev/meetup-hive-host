
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { format } from "date-fns";
import { Calendar as CalendarIcon, Clock } from "lucide-react";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const CreateEventForm: React.FC = () => {
  const [date, setDate] = useState<Date>();
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Event created!",
      description: "Your event has been successfully created.",
    });
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <h2 className="text-xl font-bold">Event Details</h2>
        
        <div className="grid gap-2">
          <Label htmlFor="title">Event Title</Label>
          <Input
            id="title"
            placeholder="Tech Conference 2025"
            required
          />
        </div>
        
        <div className="grid gap-2">
          <Label htmlFor="category">Category</Label>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="tech">Tech Meetup</SelectItem>
              <SelectItem value="conference">Conference</SelectItem>
              <SelectItem value="workshop">Workshop</SelectItem>
              <SelectItem value="networking">Networking</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div className="grid gap-2">
          <Label htmlFor="description">Description</Label>
          <Textarea
            id="description"
            placeholder="Details about your event..."
            className="min-h-32"
            required
          />
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-bold">Date & Time</h2>
        
        <div className="grid gap-2">
          <Label>Date</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "w-full justify-start text-left font-normal",
                  !date && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? format(date, "PPP") : <span>Pick a date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0 z-50 pointer-events-auto">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                initialFocus
                className="p-3"
              />
            </PopoverContent>
          </Popover>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="grid gap-2">
            <Label htmlFor="startTime">Start Time</Label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Start time" />
              </SelectTrigger>
              <SelectContent>
                {Array.from({ length: 24 }).map((_, hour) => (
                  <SelectItem key={hour} value={`${hour}:00`}>
                    {hour === 0 ? "12:00 AM" : hour < 12 ? `${hour}:00 AM` : hour === 12 ? "12:00 PM" : `${hour - 12}:00 PM`}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <div className="grid gap-2">
            <Label htmlFor="endTime">End Time</Label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="End time" />
              </SelectTrigger>
              <SelectContent>
                {Array.from({ length: 24 }).map((_, hour) => (
                  <SelectItem key={hour} value={`${hour}:00`}>
                    {hour === 0 ? "12:00 AM" : hour < 12 ? `${hour}:00 AM` : hour === 12 ? "12:00 PM" : `${hour - 12}:00 PM`}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-bold">Location</h2>
        
        <div className="grid gap-2">
          <Label htmlFor="location">Venue Name</Label>
          <Input
            id="location"
            placeholder="TechHub Conference Center"
            required
          />
        </div>
        
        <div className="grid gap-2">
          <Label htmlFor="mapUrl">Map URL (optional)</Label>
          <Input
            id="mapUrl"
            placeholder="https://maps.example.com/venue"
          />
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-bold">Additional Options</h2>
        
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            id="mustAttend"
            className="h-4 w-4 rounded border-gray-300"
          />
          <Label htmlFor="mustAttend" className="cursor-pointer">
            Mark as "Must Attend" event
          </Label>
        </div>
      </div>

      <Button type="submit" className="w-full bg-meetup-green hover:bg-meetup-green/90">
        Create Event
      </Button>
    </form>
  );
};

export default CreateEventForm;
