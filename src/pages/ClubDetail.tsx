
import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { clubs } from "@/data/clubs";
import { workshops } from "@/data/workshops";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Mail, Phone, User, Users, Calendar, Link as LinkIcon, ExternalLink } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ClubWorkshopForm from "@/components/ClubWorkshopForm";

const ClubDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const club = clubs.find(club => club.id === id);
  const clubWorkshops = workshops.filter(workshop => workshop.clubId === id);
  
  const [activeTab, setActiveTab] = useState<string>("about");

  if (!club) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-3xl font-bold mb-4">Club Not Found</h1>
          <p className="text-gray-600 mb-8">The club you're looking for doesn't exist or has been removed.</p>
          <Button asChild>
            <a href="/clubs">Back to Clubs</a>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">{club.name}</h1>
            <p className="text-gray-600">{club.description}</p>
          </div>
          
          <Link to={`/clubs/${club.id}/join`}>
            <Button className="bg-black hover:bg-gray-800">
              Join This Club
            </Button>
          </Link>
        </div>
        
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
          <TabsList className="grid grid-cols-3 w-full md:w-auto">
            <TabsTrigger value="about">About</TabsTrigger>
            <TabsTrigger value="members">Members</TabsTrigger>
            <TabsTrigger value="workshops">Workshops</TabsTrigger>
          </TabsList>
          
          <TabsContent value="about" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Club Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-col md:flex-row gap-4 md:gap-8">
                  <div className="space-y-3 flex-1">
                    <h3 className="font-semibold text-lg">Contact Details</h3>
                    
                    <div className="flex items-start gap-2 text-gray-700">
                      <MapPin className="h-5 w-5 shrink-0 mt-0.5" />
                      <span>{club.address}</span>
                    </div>
                    
                    <div className="flex items-center gap-2 text-gray-700">
                      <Mail className="h-5 w-5" />
                      <a href={`mailto:${club.contactEmail}`} className="text-black hover:underline">
                        {club.contactEmail}
                      </a>
                    </div>
                    
                    {club.contactPhone && (
                      <div className="flex items-center gap-2 text-gray-700">
                        <Phone className="h-5 w-5" />
                        <a href={`tel:${club.contactPhone}`} className="text-black hover:underline">
                          {club.contactPhone}
                        </a>
                      </div>
                    )}
                  </div>
                  
                  <div className="space-y-3 flex-1">
                    <h3 className="font-semibold text-lg">Social Media</h3>
                    
                    {club.socialMedia.twitter && (
                      <div className="flex items-center gap-2 text-gray-700">
                        <LinkIcon className="h-5 w-5" />
                        <a 
                          href={club.socialMedia.twitter} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-black hover:underline flex items-center"
                        >
                          Twitter <ExternalLink className="h-3 w-3 ml-1" />
                        </a>
                      </div>
                    )}
                    
                    {club.socialMedia.facebook && (
                      <div className="flex items-center gap-2 text-gray-700">
                        <LinkIcon className="h-5 w-5" />
                        <a 
                          href={club.socialMedia.facebook} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-black hover:underline flex items-center"
                        >
                          Facebook <ExternalLink className="h-3 w-3 ml-1" />
                        </a>
                      </div>
                    )}
                    
                    {club.socialMedia.instagram && (
                      <div className="flex items-center gap-2 text-gray-700">
                        <LinkIcon className="h-5 w-5" />
                        <a 
                          href={club.socialMedia.instagram} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-black hover:underline flex items-center"
                        >
                          Instagram <ExternalLink className="h-3 w-3 ml-1" />
                        </a>
                      </div>
                    )}
                    
                    {club.socialMedia.linkedin && (
                      <div className="flex items-center gap-2 text-gray-700">
                        <LinkIcon className="h-5 w-5" />
                        <a 
                          href={club.socialMedia.linkedin} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-black hover:underline flex items-center"
                        >
                          LinkedIn <ExternalLink className="h-3 w-3 ml-1" />
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Club Coordinator</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                    <User className="h-6 w-6 text-gray-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{club.coordinator.name}</h3>
                    <div className="text-gray-600">{club.coordinator.email}</div>
                    {club.coordinator.phone && (
                      <div className="text-gray-600">{club.coordinator.phone}</div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="members" className="space-y-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle>Club Members</CardTitle>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Users className="mr-1 h-4 w-4" />
                  <span>{club.members.length} members</span>
                </div>
              </CardHeader>
              <CardContent className="grid gap-6">
                {club.members.map((member) => (
                  <div key={member.id} className="flex items-center justify-between space-x-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                        {member.avatar ? (
                          <img
                            src={member.avatar}
                            alt={member.name}
                            className="w-full h-full rounded-full object-cover"
                          />
                        ) : (
                          <User className="h-5 w-5 text-gray-500" />
                        )}
                      </div>
                      <div>
                        <p className="text-sm font-medium leading-none">{member.name}</p>
                        <p className="text-sm text-gray-500">{member.role}</p>
                      </div>
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="mr-1 h-4 w-4" />
                      <span>Joined {new Date(member.joinedDate).toLocaleDateString()}</span>
                    </div>
                  </div>
                ))}
              </CardContent>
              <CardFooter>
                <Link to={`/clubs/${club.id}/join`} className="w-full">
                  <Button className="w-full bg-black hover:bg-gray-800">
                    Join This Club
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </TabsContent>
          
          <TabsContent value="workshops" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {clubWorkshops.length > 0 ? (
                clubWorkshops.map(workshop => (
                  <Link to={`/workshops/${workshop.id}`} key={workshop.id} className="no-underline text-inherit">
                    <Card className="h-full transition-all hover:shadow-md">
                      <CardHeader>
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
                            <MapPin className="h-4 w-4" />
                            <span className="line-clamp-1">{workshop.location}</span>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="border-t pt-4">
                        <Button className="w-full bg-black hover:bg-gray-800">View Details</Button>
                      </CardFooter>
                    </Card>
                  </Link>
                ))
              ) :
              (
                <Card className="col-span-full">
                  <CardHeader>
                    <CardTitle>No Workshops Yet</CardTitle>
                    <CardDescription>
                      This club hasn't hosted any workshops yet. Be the first to create one!
                    </CardDescription>
                  </CardHeader>
                </Card>
              )}
            </div>
            
            <div className="mt-8">
              <h2 className="text-2xl font-bold mb-6">Host a New Workshop</h2>
              <ClubWorkshopForm clubId={club.id} />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ClubDetail;
