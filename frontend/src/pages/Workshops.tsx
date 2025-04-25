
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { workshops } from "@/data/workshops";
import { clubs } from "@/data/clubs";
import { Calendar, Clock, MapPin, Tag, Users, Search } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { WorkshopRSVPForm } from "@/components/WorkshopRSVPForm";

const Workshops: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  const filteredWorkshops = workshops.filter(workshop => 
    workshop.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    workshop.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    workshop.domainTag.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Get club name by club ID
  const getClubName = (clubId: string) => {
    const club = clubs.find(club => club.id === clubId);
    return club ? club.name : "Unknown Club";
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold mb-2">Workshops</h1>
            <p className="text-gray-600">Discover and join workshops hosted by clubs</p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <div className="relative w-full sm:w-64">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input 
                placeholder="Search workshops..." 
                className="pl-10"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
        
        {filteredWorkshops.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-lg shadow-sm">
            <h2 className="text-xl mb-4">No workshops found</h2>
            <p className="mb-6 text-gray-600">
              Try a different search term or check back later
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredWorkshops.map(workshop => (
              <Card key={workshop.id} className="h-full transition-all hover:shadow-md">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl">{workshop.name}</CardTitle>
                      <CardDescription className="text-sm">
                        Hosted by {getClubName(workshop.clubId)}
                      </CardDescription>
                    </div>
                    <span className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800">
                      <Tag className="mr-1 h-3 w-3" />
                      {workshop.domainTag}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-2">{workshop.description}</p>
                  
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Calendar className="h-4 w-4 text-gray-400" />
                      <span>{new Date(workshop.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Clock className="h-4 w-4 text-gray-400" />
                      <span>{workshop.startTime} - {workshop.endTime}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <MapPin className="h-4 w-4 text-gray-400" />
                      <span className="line-clamp-1">{workshop.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Users className="h-4 w-4 text-gray-400" />
                      <span>{workshop.membersHandling.length} instructor{workshop.membersHandling.length !== 1 ? 's' : ''}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="border-t pt-4 flex justify-end">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline">RSVP Now</Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[500px]">
                      <DialogHeader>
                        <DialogTitle>RSVP for {workshop.name}</DialogTitle>
                        <DialogDescription>
                          Fill in your details to register for this workshop
                        </DialogDescription>
                      </DialogHeader>
                      <WorkshopRSVPForm workshopId={workshop.id} />
                    </DialogContent>
                  </Dialog>
                </CardFooter>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Workshops;
