
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { workshops } from "@/data/workshops";
import { clubs } from "@/data/clubs";
import { Calendar, MapPin, Clock, Search, Tag } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Workshops: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  const filteredWorkshops = workshops.filter(workshop => 
    workshop.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    workshop.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    workshop.domainTag.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
            <p className="text-gray-600">Discover workshops hosted by our clubs</p>
          </div>
          
          <div className="relative w-full md:w-64">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input 
              placeholder="Search workshops..." 
              className="pl-10"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
        
        {filteredWorkshops.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-lg shadow-sm">
            <h2 className="text-xl mb-4">No workshops found</h2>
            <p className="mb-6 text-gray-600">
              Try a different search term
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredWorkshops.map(workshop => (
              <Link to={`/workshops/${workshop.id}`} key={workshop.id} className="no-underline text-inherit">
                <Card className="h-full transition-all hover:shadow-md">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <Badge variant="outline" className="mb-2">{workshop.domainTag}</Badge>
                      <Badge variant="secondary">{getClubName(workshop.clubId)}</Badge>
                    </div>
                    <CardTitle className="text-xl">{workshop.name}</CardTitle>
                    <CardDescription className="line-clamp-2">{workshop.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Calendar className="h-4 w-4" />
                        <span>{workshop.date}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Clock className="h-4 w-4" />
                        <span>{workshop.startTime} - {workshop.endTime}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <MapPin className="h-4 w-4" />
                        <span className="line-clamp-1">{workshop.location}</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="border-t pt-4">
                    <Button className="w-full bg-black hover:bg-gray-800">RSVP Now</Button>
                  </CardFooter>
                </Card>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Workshops;
