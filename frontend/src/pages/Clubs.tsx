
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { clubs } from "@/data/clubs";
import { MapPin, User, Calendar, Search, Plus } from "lucide-react";

const Clubs: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  const filteredClubs = clubs.filter(club => 
    club.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    club.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold mb-2">Clubs & Communities</h1>
            <p className="text-gray-600">Find and join clubs that match your interests</p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <div className="relative w-full sm:w-64">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input 
                placeholder="Search clubs..." 
                className="pl-10"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
              />
            </div>
            
            <Link to="/clubs/register">
              <Button className="bg-black hover:bg-gray-800 text-white w-full sm:w-auto">
                <Plus className="h-4 w-4 mr-2" />
                New Club
              </Button>
            </Link>
          </div>
        </div>
        
        {filteredClubs.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-lg shadow-sm">
            <h2 className="text-xl mb-4">No clubs found</h2>
            <p className="mb-6 text-gray-600">
              Try a different search term or create a new club
            </p>
            <Link to="/clubs/register">
              <Button className="bg-black hover:bg-gray-800 text-white">
                <Plus className="h-4 w-4 mr-2" />
                Register New Club
              </Button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredClubs.map(club => (
              <Link to={`/clubs/${club.id}`} key={club.id} className="no-underline text-inherit">
                <Card className="h-full transition-all hover:shadow-md">
                  <CardHeader>
                    <CardTitle className="text-xl">{club.name}</CardTitle>
                    <CardDescription className="line-clamp-2">{club.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                      <MapPin className="h-4 w-4" />
                      <span className="line-clamp-1">{club.address}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <User className="h-4 w-4" />
                      <span>{club.members.length} members</span>
                    </div>
                  </CardContent>
                  <CardFooter className="border-t pt-4">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Calendar className="h-4 w-4" />
                      <span>Coordinated by {club.coordinator.name}</span>
                    </div>
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

export default Clubs;
