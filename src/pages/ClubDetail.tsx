
import React from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar } from "@/components/ui/avatar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { clubs } from "@/data/clubs";
import { MapPin, Mail, Phone, Calendar, ArrowLeft, ExternalLink } from "lucide-react";

const ClubDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const club = clubs.find(club => club.id === id);

  if (!club) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-3xl font-bold mb-4">Club Not Found</h1>
          <p className="mb-8 text-gray-600">The club you're looking for doesn't exist or has been removed.</p>
          <Link to="/clubs">
            <Button className="bg-black hover:bg-gray-800 text-white">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Clubs
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Link to="/clubs" className="text-gray-600 hover:text-black inline-flex items-center">
            <ArrowLeft className="h-4 w-4 mr-1" />
            Back to Clubs
          </Link>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h1 className="text-3xl font-bold mb-4">{club.name}</h1>
          <p className="text-gray-600 mb-6">{club.description}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h2 className="text-lg font-semibold mb-4">Club Information</h2>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-gray-500 mt-0.5" />
                  <div>
                    <p className="font-medium">Address</p>
                    <p className="text-gray-600">{club.address}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-gray-500 mt-0.5" />
                  <div>
                    <p className="font-medium">Email</p>
                    <a href={`mailto:${club.contactEmail}`} className="text-gray-600 hover:text-black">
                      {club.contactEmail}
                    </a>
                  </div>
                </div>
                
                {club.contactPhone && (
                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-gray-500 mt-0.5" />
                    <div>
                      <p className="font-medium">Phone</p>
                      <a href={`tel:${club.contactPhone}`} className="text-gray-600 hover:text-black">
                        {club.contactPhone}
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            <div>
              <h2 className="text-lg font-semibold mb-4">Coordinator</h2>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">{club.coordinator.name}</CardTitle>
                  <CardDescription>Club Coordinator</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-gray-500" />
                      <a href={`mailto:${club.coordinator.email}`} className="text-gray-600 hover:text-black">
                        {club.coordinator.email}
                      </a>
                    </div>
                    
                    {club.coordinator.phone && (
                      <div className="flex items-center gap-2">
                        <Phone className="h-4 w-4 text-gray-500" />
                        <a href={`tel:${club.coordinator.phone}`} className="text-gray-600 hover:text-black">
                          {club.coordinator.phone}
                        </a>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
              
              {Object.keys(club.socialMedia).length > 0 && (
                <div className="mt-6">
                  <h2 className="text-lg font-semibold mb-4">Social Media</h2>
                  <div className="flex flex-wrap gap-3">
                    {club.socialMedia.twitter && (
                      <a 
                        href={club.socialMedia.twitter} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-sm bg-gray-100 hover:bg-gray-200 px-3 py-1.5 rounded-full"
                      >
                        Twitter <ExternalLink className="h-3 w-3 ml-1" />
                      </a>
                    )}
                    {club.socialMedia.facebook && (
                      <a 
                        href={club.socialMedia.facebook} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-sm bg-gray-100 hover:bg-gray-200 px-3 py-1.5 rounded-full"
                      >
                        Facebook <ExternalLink className="h-3 w-3 ml-1" />
                      </a>
                    )}
                    {club.socialMedia.instagram && (
                      <a 
                        href={club.socialMedia.instagram} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-sm bg-gray-100 hover:bg-gray-200 px-3 py-1.5 rounded-full"
                      >
                        Instagram <ExternalLink className="h-3 w-3 ml-1" />
                      </a>
                    )}
                    {club.socialMedia.linkedin && (
                      <a 
                        href={club.socialMedia.linkedin} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-sm bg-gray-100 hover:bg-gray-200 px-3 py-1.5 rounded-full"
                      >
                        LinkedIn <ExternalLink className="h-3 w-3 ml-1" />
                      </a>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        
        <Tabs defaultValue="members" className="w-full">
          <TabsList className="mb-6">
            <TabsTrigger value="members">Members</TabsTrigger>
            <TabsTrigger value="events">Upcoming Events</TabsTrigger>
          </TabsList>
          
          <TabsContent value="members">
            <h2 className="text-2xl font-bold mb-6">Club Members</h2>
            
            {club.members.length === 0 ? (
              <div className="text-center py-8 bg-white rounded-lg shadow-sm">
                <p className="text-gray-600">No members yet</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {club.members.map(member => (
                  <Card key={member.id} className="overflow-hidden">
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-4">
                        <Avatar className="h-12 w-12">
                          <img 
                            src={member.avatar || "/placeholder.svg"} 
                            alt={member.name} 
                            className="h-full w-full object-cover" 
                          />
                        </Avatar>
                        <div>
                          <CardTitle className="text-lg">{member.name}</CardTitle>
                          <CardDescription>{member.role}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      {member.bio && <p className="text-gray-600 mb-4">{member.bio}</p>}
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span>Joined on {new Date(member.joinedDate).toLocaleDateString()}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="events">
            <h2 className="text-2xl font-bold mb-6">Upcoming Events</h2>
            <div className="text-center py-8 bg-white rounded-lg shadow-sm">
              <p className="text-gray-600 mb-4">No upcoming events for this club</p>
              <p className="text-sm text-gray-500">Check back soon for new events</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ClubDetail;
