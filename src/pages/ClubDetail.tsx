
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { clubs } from "@/data/clubs";
import { Button } from "@/components/ui/button";
import { MapPin, Mail, Phone, Calendar, User, Globe, Users } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CreateWorkshopForm } from "@/components/CreateWorkshopForm";
import { JoinClubForm } from "@/components/JoinClubForm";
import { workshops } from "@/data/workshops";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const ClubDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [activeTab, setActiveTab] = useState("about");
  
  const club = clubs.find((c) => c.id === id);
  
  if (!club) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="container mx-auto px-4 py-12">
          <div className="bg-white p-8 rounded-lg shadow-sm text-center">
            <h1 className="text-2xl font-bold mb-4">Club Not Found</h1>
            <p className="text-gray-600 mb-6">The club you're looking for doesn't exist or has been removed.</p>
          </div>
        </div>
      </div>
    );
  }

  // Get workshops for this club
  const clubWorkshops = workshops.filter(workshop => workshop.clubId === club.id);
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="flex flex-col md:flex-row justify-between gap-6">
            <div>
              <h1 className="text-3xl font-bold mb-2">{club.name}</h1>
              <p className="text-gray-600 mb-4">{club.description}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
                <div className="flex items-start gap-2">
                  <MapPin className="h-5 w-5 text-gray-400 mt-0.5" />
                  <span className="text-gray-700">{club.address}</span>
                </div>
                <div className="flex items-start gap-2">
                  <Mail className="h-5 w-5 text-gray-400 mt-0.5" />
                  <span className="text-gray-700">{club.contactEmail}</span>
                </div>
                <div className="flex items-start gap-2">
                  <Phone className="h-5 w-5 text-gray-400 mt-0.5" />
                  <span className="text-gray-700">{club.contactPhone}</span>
                </div>
                <div className="flex items-start gap-2">
                  <Users className="h-5 w-5 text-gray-400 mt-0.5" />
                  <span className="text-gray-700">{club.members.length} Members</span>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {club.socialMedia.twitter && (
                  <a href={club.socialMedia.twitter} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm text-blue-600 hover:underline">
                    <Globe className="h-4 w-4" />
                    Twitter
                  </a>
                )}
                {club.socialMedia.facebook && (
                  <a href={club.socialMedia.facebook} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm text-blue-600 hover:underline">
                    <Globe className="h-4 w-4" />
                    Facebook
                  </a>
                )}
                {club.socialMedia.instagram && (
                  <a href={club.socialMedia.instagram} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm text-blue-600 hover:underline">
                    <Globe className="h-4 w-4" />
                    Instagram
                  </a>
                )}
                {club.socialMedia.linkedin && (
                  <a href={club.socialMedia.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm text-blue-600 hover:underline">
                    <Globe className="h-4 w-4" />
                    LinkedIn
                  </a>
                )}
              </div>
            </div>
            
            <div className="flex flex-col gap-2">
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="default" className="w-full">Join this Club</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[550px]">
                  <DialogHeader>
                    <DialogTitle>Join {club.name}</DialogTitle>
                    <DialogDescription>
                      Fill in your details to apply for membership in this club
                    </DialogDescription>
                  </DialogHeader>
                  <JoinClubForm clubId={club.id} />
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
        
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
          <TabsList className="grid grid-cols-4 w-full md:w-1/2">
            <TabsTrigger value="about">About</TabsTrigger>
            <TabsTrigger value="members">Members</TabsTrigger>
            <TabsTrigger value="workshops">Workshops</TabsTrigger>
            <TabsTrigger value="create">Host Workshop</TabsTrigger>
          </TabsList>
          
          <TabsContent value="about" className="space-y-4">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold mb-4">About this Club</h2>
              <p className="text-gray-700 mb-4">{club.description}</p>
              
              <h3 className="text-lg font-medium mt-6 mb-3">Coordinator</h3>
              <div className="bg-gray-50 p-4 rounded-md">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center">
                    <User className="h-6 w-6 text-gray-600" />
                  </div>
                  <div>
                    <h4 className="font-medium">{club.coordinator.name}</h4>
                    <p className="text-sm text-gray-600">{club.coordinator.email}</p>
                    {club.coordinator.phone && (
                      <p className="text-sm text-gray-600">{club.coordinator.phone}</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="members" className="space-y-4">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Club Members</h2>
                <Badge variant="outline">{club.members.length} Total</Badge>
              </div>
              
              {club.members.length === 0 ? (
                <div className="text-center py-8">
                  <p className="text-gray-600">This club doesn't have any members yet.</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {club.members.map((member) => (
                    <Card key={member.id} className="overflow-hidden">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg">{member.name}</CardTitle>
                        <CardDescription>{member.role}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        {member.bio && (
                          <p className="text-sm text-gray-600 mb-2">{member.bio}</p>
                        )}
                        <div className="flex items-center text-xs text-gray-500">
                          <Calendar className="h-3 w-3 mr-1" />
                          Joined {new Date(member.joinedDate).toLocaleDateString()}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </div>
          </TabsContent>
          
          <TabsContent value="workshops" className="space-y-4">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Club Workshops</h2>
                <Badge variant="outline">{clubWorkshops.length} Total</Badge>
              </div>
              
              {clubWorkshops.length === 0 ? (
                <div className="text-center py-8">
                  <p className="text-gray-600 mb-4">This club hasn't hosted any workshops yet.</p>
                  <Button onClick={() => setActiveTab("create")}>Host a Workshop</Button>
                </div>
              ) : (
                <div className="space-y-4">
                  {clubWorkshops.map((workshop) => (
                    <Card key={workshop.id}>
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <div>
                            <CardTitle>{workshop.name}</CardTitle>
                            <CardDescription>{workshop.domainTag}</CardDescription>
                          </div>
                          <Badge>{new Date(workshop.date).toLocaleDateString()}</Badge>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-2">
                        <p className="text-sm text-gray-700">{workshop.description}</p>
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <Clock className="h-4 w-4 text-gray-400" />
                          <span>{workshop.startTime} - {workshop.endTime}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <MapPin className="h-4 w-4 text-gray-400" />
                          <span>{workshop.location}</span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </div>
          </TabsContent>
          
          <TabsContent value="create">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold mb-4">Host a New Workshop</h2>
              <CreateWorkshopForm 
                clubId={club.id} 
                onSuccess={() => setActiveTab("workshops")} 
              />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ClubDetail;
