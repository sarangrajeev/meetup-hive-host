
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { workshops } from "@/data/workshops";
import { clubs } from "@/data/clubs";
import { Calendar, Clock, MapPin, User, ClipboardList, Info, BookOpen } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "@/hooks/use-toast";

const WorkshopDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const workshop = workshops.find(workshop => workshop.id === id);
  const club = workshop ? clubs.find(club => club.id === workshop.clubId) : null;
  
  // RSVP form schema
  const formSchema = z.object({
    name: z.string().min(2, { message: "Name must be at least 2 characters." }),
    email: z.string().email({ message: "Please enter a valid email address." }),
    contactNumber: z.string().min(10, { message: "Please enter a valid contact number." }),
    profession: z.string().min(2, { message: "Please enter your profession." }),
    willAttend: z.boolean().refine(val => val === true, {
      message: "You must confirm your attendance."
    })
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      contactNumber: "",
      profession: "",
      willAttend: false
    }
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log("RSVP Submission:", data);
    toast({
      title: "RSVP Submitted!",
      description: "You have successfully registered for the workshop."
    });
    form.reset();
  };

  if (!workshop || !club) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-3xl font-bold mb-4">Workshop Not Found</h1>
          <p className="text-gray-600 mb-8">The workshop you're looking for doesn't exist or has been removed.</p>
          <Button asChild>
            <a href="/workshops">Back to Workshops</a>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <Badge variant="outline">{workshop.domainTag}</Badge>
            <span className="text-gray-500">•</span>
            <span className="text-gray-500">Hosted by {club.name}</span>
          </div>
          
          <h1 className="text-3xl font-bold mb-4">{workshop.name}</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="flex items-center gap-2 text-gray-700">
              <Calendar className="h-5 w-5" />
              <span>{workshop.date}</span>
            </div>
            
            <div className="flex items-center gap-2 text-gray-700">
              <Clock className="h-5 w-5" />
              <span>{workshop.startTime} - {workshop.endTime}</span>
            </div>
            
            <div className="flex items-center gap-2 text-gray-700">
              <MapPin className="h-5 w-5" />
              <span>{workshop.location}</span>
            </div>
          </div>
          
          <p className="text-gray-700 max-w-3xl">{workshop.description}</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Tabs defaultValue="details">
              <TabsList className="grid grid-cols-4 mb-6">
                <TabsTrigger value="details">Details</TabsTrigger>
                <TabsTrigger value="schedule">Schedule</TabsTrigger>
                <TabsTrigger value="instructors">Instructors</TabsTrigger>
                <TabsTrigger value="rules">Rules & Prerequisites</TabsTrigger>
              </TabsList>
              
              <TabsContent value="details" className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Info className="h-5 w-5" />
                  Event Information
                </h3>
                <p className="text-gray-700 mb-4">{workshop.eventInfo}</p>
              </TabsContent>
              
              <TabsContent value="schedule" className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <ClipboardList className="h-5 w-5" />
                  Workshop Schedule
                </h3>
                <div className="space-y-4">
                  {workshop.schedule.map((item, index) => (
                    <div key={index} className="flex border-b pb-3 last:border-0">
                      <div className="font-medium w-32">{item.time}</div>
                      <div>{item.activity}</div>
                    </div>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="instructors" className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <User className="h-5 w-5" />
                  Workshop Instructors
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {workshop.memberHandlers.map((member, index) => (
                    <Card key={index}>
                      <CardContent className="pt-6">
                        <div className="text-center">
                          <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-3 flex items-center justify-center">
                            <User className="h-8 w-8 text-gray-500" />
                          </div>
                          <h4 className="font-bold text-lg">{member.name}</h4>
                          <p className="text-gray-600">{member.designation}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="rules" className="bg-white p-6 rounded-lg shadow-sm">
                <div className="mb-6">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <ClipboardList className="h-5 w-5" />
                    Rules and Regulations
                  </h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    {workshop.rules.map((rule, index) => (
                      <li key={index}>{rule}</li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <BookOpen className="h-5 w-5" />
                    Prerequisites
                  </h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    {workshop.prerequisites.map((prereq, index) => (
                      <li key={index}>{prereq}</li>
                    ))}
                  </ul>
                </div>
              </TabsContent>
            </Tabs>
          </div>
          
          <div>
            <Card>
              <CardHeader>
                <CardTitle>RSVP for this Workshop</CardTitle>
                <CardDescription>
                  Secure your spot by filling out this form
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address</FormLabel>
                          <FormControl>
                            <Input placeholder="you@example.com" type="email" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="contactNumber"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Contact Number</FormLabel>
                          <FormControl>
                            <Input placeholder="Your phone number" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="profession"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Profession</FormLabel>
                          <FormControl>
                            <Input placeholder="Your profession" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="willAttend"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0 py-2">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel>
                              I confirm I will attend this workshop
                            </FormLabel>
                            <FormDescription>
                              By checking this, you commit to attending the workshop
                            </FormDescription>
                          </div>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <Button type="submit" className="w-full bg-black hover:bg-gray-800">
                      Submit RSVP
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkshopDetail;
