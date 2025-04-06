
import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { clubs } from "@/data/clubs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "@/hooks/use-toast";

const interestOptions = [
  { id: "programming", label: "Programming" },
  { id: "design", label: "Design" },
  { id: "ai", label: "Artificial Intelligence" },
  { id: "data", label: "Data Science" },
  { id: "mobile", label: "Mobile Development" },
  { id: "web", label: "Web Development" },
  { id: "game", label: "Game Development" },
  { id: "security", label: "Cybersecurity" },
  { id: "blockchain", label: "Blockchain" },
  { id: "iot", label: "Internet of Things" }
];

const formSchema = z.object({
  // Identity Information
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  dob: z.string().min(1, { message: "Date of birth is required." }),
  profession: z.string().min(2, { message: "Profession is required." }),
  language: z.string().min(1, { message: "Language is required." }),
  
  // Contact Information
  address: z.string().min(5, { message: "Address must be at least 5 characters." }),
  city: z.string().min(2, { message: "City is required." }),
  mobile: z.string().min(10, { message: "Contact number must be at least 10 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  
  // Club Information
  interests: z.array(z.string()).min(1, { message: "Select at least one interest." }),
  otherInfo: z.string().optional(),
});

const JoinClub: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const club = clubs.find(club => club.id === id);
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      dob: "",
      profession: "",
      language: "",
      address: "",
      city: "",
      mobile: "",
      email: "",
      interests: [],
      otherInfo: "",
    }
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    // Add current date as joining date
    const memberData = {
      ...data,
      joiningDate: new Date().toISOString().split('T')[0]
    };
    
    console.log("Member registration:", memberData);
    
    toast({
      title: "Registration Submitted!",
      description: "Your membership application has been received."
    });
    
    form.reset();
  };

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
        <div className="flex flex-col gap-2 mb-8">
          <h1 className="text-3xl font-bold">Join {club.name}</h1>
          <p className="text-gray-600 max-w-2xl">
            Fill out the application form below to become a member of {club.name}. 
            Your application will be reviewed by the club coordinator.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Membership Application</CardTitle>
              <CardDescription>
                Please provide your information to join the club
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Identity Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                        name="dob"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Date of Birth</FormLabel>
                            <FormControl>
                              <Input type="date" {...field} />
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
                        name="language"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Primary Language</FormLabel>
                            <FormControl>
                              <Input placeholder="Your primary language" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-4 pt-4 border-t">
                    <h3 className="text-lg font-medium">Contact Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="md:col-span-2">
                        <FormField
                          control={form.control}
                          name="address"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Address</FormLabel>
                              <FormControl>
                                <Input placeholder="Your address" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      <FormField
                        control={form.control}
                        name="city"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>City</FormLabel>
                            <FormControl>
                              <Input placeholder="Your city" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="mobile"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Mobile Number</FormLabel>
                            <FormControl>
                              <Input placeholder="Your contact number" {...field} />
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
                    </div>
                  </div>
                  
                  <div className="space-y-4 pt-4 border-t">
                    <h3 className="text-lg font-medium">Club Information</h3>
                    
                    <FormField
                      control={form.control}
                      name="interests"
                      render={() => (
                        <FormItem>
                          <div className="mb-4">
                            <FormLabel>Areas of Interest</FormLabel>
                            <FormDescription>
                              Select all that apply to you
                            </FormDescription>
                          </div>
                          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                            {interestOptions.map((option) => (
                              <FormField
                                key={option.id}
                                control={form.control}
                                name="interests"
                                render={({ field }) => {
                                  return (
                                    <FormItem
                                      key={option.id}
                                      className="flex flex-row items-start space-x-3 space-y-0"
                                    >
                                      <FormControl>
                                        <Checkbox
                                          checked={field.value?.includes(option.id)}
                                          onCheckedChange={(checked) => {
                                            return checked
                                              ? field.onChange([...field.value, option.id])
                                              : field.onChange(
                                                  field.value?.filter(
                                                    (value) => value !== option.id
                                                  )
                                                )
                                          }}
                                        />
                                      </FormControl>
                                      <FormLabel className="font-normal">
                                        {option.label}
                                      </FormLabel>
                                    </FormItem>
                                  )
                                }}
                              />
                            ))}
                          </div>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="otherInfo"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Other Information</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Tell us about your experience, what you hope to gain from the club, etc." 
                              className="min-h-[100px]" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <div className="flex items-center gap-2 text-sm text-gray-600 mt-2">
                      <span>Joining Date: {new Date().toLocaleDateString()}</span>
                      <span className="text-gray-400">(Automatically set to today)</span>
                    </div>
                  </div>
                  
                  <Button type="submit" className="w-full bg-black hover:bg-gray-800">
                    Submit Application
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default JoinClub;
