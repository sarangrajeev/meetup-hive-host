
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { ArrowLeft } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(3, { message: "Club name must be at least 3 characters" }),
  description: z.string().min(20, { message: "Description must be at least 20 characters" }),
  address: z.string().min(10, { message: "Please provide a valid address" }),
  contactEmail: z.string().email({ message: "Please enter a valid email address" }),
  contactPhone: z.string().optional(),
  socialTwitter: z.string().url({ message: "Please enter a valid URL" }).optional().or(z.literal("")),
  socialFacebook: z.string().url({ message: "Please enter a valid URL" }).optional().or(z.literal("")),
  socialInstagram: z.string().url({ message: "Please enter a valid URL" }).optional().or(z.literal("")),
  socialLinkedin: z.string().url({ message: "Please enter a valid URL" }).optional().or(z.literal("")),
  coordinatorName: z.string().min(3, { message: "Coordinator name must be at least 3 characters" }),
  coordinatorEmail: z.string().email({ message: "Please enter a valid email address" }),
  coordinatorPhone: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

const ClubRegistration: React.FC = () => {
  const navigate = useNavigate();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      description: "",
      address: "",
      contactEmail: "",
      contactPhone: "",
      socialTwitter: "",
      socialFacebook: "",
      socialInstagram: "",
      socialLinkedin: "",
      coordinatorName: "",
      coordinatorEmail: "",
      coordinatorPhone: "",
    },
  });
  
  const onSubmit = (data: FormValues) => {
    console.log("Form submitted:", data);
    
    // Show success message
    toast.success("Club registration submitted successfully!", {
      description: "We'll review your submission and get back to you soon.",
    });
    
    // Redirect to clubs page
    setTimeout(() => {
      navigate("/clubs");
    }, 1500);
  };

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
        
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-sm p-6 mb-8">
          <h1 className="text-3xl font-bold mb-2">Register a New Club</h1>
          <p className="text-gray-600 mb-8">Fill out the form below to register your club with our community</p>
          
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-xl font-semibold">Club Information</h2>
                
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Club Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter club name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Description</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Describe your club, its mission, and activities"
                          rows={4}
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="address"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Address</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter club address" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="contactEmail"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Contact Email</FormLabel>
                        <FormControl>
                          <Input placeholder="contact@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="contactPhone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Contact Phone (Optional)</FormLabel>
                        <FormControl>
                          <Input placeholder="123-456-7890" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              
              <div className="space-y-6">
                <h2 className="text-xl font-semibold">Social Media Links (Optional)</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="socialTwitter"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Twitter</FormLabel>
                        <FormControl>
                          <Input placeholder="https://twitter.com/yourclub" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="socialFacebook"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Facebook</FormLabel>
                        <FormControl>
                          <Input placeholder="https://facebook.com/yourclub" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="socialInstagram"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Instagram</FormLabel>
                        <FormControl>
                          <Input placeholder="https://instagram.com/yourclub" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="socialLinkedin"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>LinkedIn</FormLabel>
                        <FormControl>
                          <Input placeholder="https://linkedin.com/company/yourclub" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              
              <div className="space-y-6">
                <h2 className="text-xl font-semibold">Coordinator Details</h2>
                
                <FormField
                  control={form.control}
                  name="coordinatorName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Coordinator's full name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="coordinatorEmail"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="coordinator@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="coordinatorPhone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone (Optional)</FormLabel>
                        <FormControl>
                          <Input placeholder="123-456-7890" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              
              <div className="flex justify-end gap-4">
                <Link to="/clubs">
                  <Button type="button" variant="outline">Cancel</Button>
                </Link>
                <Button type="submit" className="bg-black hover:bg-gray-800 text-white">
                  Submit Registration
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default ClubRegistration;
