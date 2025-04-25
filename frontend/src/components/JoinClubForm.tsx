
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { format } from "date-fns";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const formSchema = z.object({
  identity: z.object({
    name: z.string().min(2, { message: "Name must be at least 2 characters." }),
    dob: z.date({ required_error: "Date of birth is required." }),
    profession: z.string().min(2, { message: "Profession is required." }),
    language: z.string().min(2, { message: "Language is required." }),
  }),
  contact: z.object({
    address: z.string().min(5, { message: "Address must be at least 5 characters." }),
    city: z.string().min(2, { message: "City is required." }),
    mobile: z.string().min(10, { message: "Mobile number must be at least 10 characters." }),
    email: z.string().email({ message: "Please enter a valid email address." }),
  }),
  glugInfo: z.object({
    interests: z.string().min(2, { message: "Interests are required." }),
    otherInfo: z.string().optional(),
  }),
});

interface JoinClubFormProps {
  clubId: string;
  onSuccess?: () => void;
}

export function JoinClubForm({ clubId, onSuccess }: JoinClubFormProps) {
  const { toast } = useToast();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      identity: {
        name: "",
        dob: undefined,
        profession: "",
        language: "",
      },
      contact: {
        address: "",
        city: "",
        mobile: "",
        email: "",
      },
      glugInfo: {
        interests: "",
        otherInfo: "",
      },
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Add joining date automatically
    const memberData = {
      ...values,
      glugInfo: {
        ...values.glugInfo,
        joiningDate: new Date().toISOString(),
      },
      clubId,
    };
    
    console.log("New member data:", memberData);
    
    toast({
      title: "Membership Request Submitted",
      description: "Your request to join the club has been submitted successfully.",
    });
    
    form.reset();
    
    if (onSuccess) {
      onSuccess();
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Identity Information</h3>
          
          <FormField
            control={form.control}
            name="identity.name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input placeholder="John Doe" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="identity.dob"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Date of Birth</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-full pl-3 text-left font-normal",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {field.value ? (
                          format(field.value, "PPP")
                        ) : (
                          <span>Select date</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={(date) =>
                        date > new Date() || date < new Date("1900-01-01")
                      }
                      initialFocus
                      className="p-3 pointer-events-auto"
                    />
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="identity.profession"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Profession</FormLabel>
                  <FormControl>
                    <Input placeholder="Software Engineer" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="identity.language"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Preferred Language</FormLabel>
                  <FormControl>
                    <Input placeholder="English" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
        
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Contact Information</h3>
          
          <FormField
            control={form.control}
            name="contact.address"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Address</FormLabel>
                <FormControl>
                  <Input placeholder="123 Main St" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <FormField
              control={form.control}
              name="contact.city"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>City</FormLabel>
                  <FormControl>
                    <Input placeholder="New York" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="contact.mobile"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Mobile Number</FormLabel>
                  <FormControl>
                    <Input placeholder="1234567890" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="contact.email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email Address</FormLabel>
                  <FormControl>
                    <Input placeholder="john@example.com" type="email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
        
        <div className="space-y-4">
          <h3 className="text-lg font-medium">GLUG Information</h3>
          
          <FormField
            control={form.control}
            name="glugInfo.interests"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Interests</FormLabel>
                <FormControl>
                  <Input placeholder="Programming, AI, Web Development" {...field} />
                </FormControl>
                <FormDescription>
                  List your technical interests, separated by commas
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="glugInfo.otherInfo"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Other Information</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="Any other information you'd like to share"
                    className="min-h-[100px]"
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <div className="p-4 bg-gray-50 rounded-md">
            <p className="text-sm text-gray-600">
              Joining Date: <span className="font-medium">{format(new Date(), "PPP")}</span>
            </p>
            <p className="text-xs text-gray-500 mt-1">
              This is automatically recorded as your membership registration date
            </p>
          </div>
        </div>
        
        <Button type="submit" className="w-full">Submit Membership Application</Button>
      </form>
    </Form>
  );
}
