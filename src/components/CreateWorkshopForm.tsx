
import React, { useState } from "react";
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
import { X, Plus } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  domainTag: z.string().min(2, {
    message: "Domain tag must be at least 2 characters.",
  }),
  description: z.string().min(10, {
    message: "Description must be at least 10 characters.",
  }),
  date: z.string().min(1, {
    message: "Date is required.",
  }),
  startTime: z.string().min(1, {
    message: "Start time is required.",
  }),
  endTime: z.string().min(1, {
    message: "End time is required.",
  }),
  location: z.string().min(2, {
    message: "Location must be at least 2 characters.",
  }),
  eventInfo: z.string().min(10, {
    message: "Event info must be at least 10 characters.",
  }),
});

interface CreateWorkshopFormProps {
  clubId: string;
  onSuccess?: () => void;
}

export function CreateWorkshopForm({ clubId, onSuccess }: CreateWorkshopFormProps) {
  const { toast } = useToast();
  const [members, setMembers] = useState<Array<{ name: string; designation: string }>>([{ name: "", designation: "" }]);
  const [scheduleItems, setScheduleItems] = useState<Array<{ time: string; activity: string }>>([{ time: "", activity: "" }]);
  const [rules, setRules] = useState<string[]>([""]);
  const [prerequisites, setPrerequisites] = useState<string[]>([""]);
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      domainTag: "",
      description: "",
      date: "",
      startTime: "",
      endTime: "",
      location: "",
      eventInfo: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // In a real app, this would send data to a backend service
    const workshopData = {
      ...values,
      clubId,
      membersHandling: members.filter(m => m.name && m.designation),
      schedule: scheduleItems.filter(s => s.time && s.activity),
      rules: rules.filter(r => r),
      prerequisites: prerequisites.filter(p => p),
    };
    
    console.log("Creating workshop:", workshopData);
    
    toast({
      title: "Workshop Created",
      description: "Your workshop has been created successfully.",
    });
    
    form.reset();
    setMembers([{ name: "", designation: "" }]);
    setScheduleItems([{ time: "", activity: "" }]);
    setRules([""]);
    setPrerequisites([""]);
    
    if (onSuccess) {
      onSuccess();
    }
  }

  // Handlers for dynamic fields
  const addMember = () => {
    setMembers([...members, { name: "", designation: "" }]);
  };

  const updateMember = (index: number, field: 'name' | 'designation', value: string) => {
    const newMembers = [...members];
    newMembers[index][field] = value;
    setMembers(newMembers);
  };

  const removeMember = (index: number) => {
    if (members.length > 1) {
      const newMembers = [...members];
      newMembers.splice(index, 1);
      setMembers(newMembers);
    }
  };

  const addScheduleItem = () => {
    setScheduleItems([...scheduleItems, { time: "", activity: "" }]);
  };

  const updateScheduleItem = (index: number, field: 'time' | 'activity', value: string) => {
    const newItems = [...scheduleItems];
    newItems[index][field] = value;
    setScheduleItems(newItems);
  };

  const removeScheduleItem = (index: number) => {
    if (scheduleItems.length > 1) {
      const newItems = [...scheduleItems];
      newItems.splice(index, 1);
      setScheduleItems(newItems);
    }
  };

  const addRule = () => {
    setRules([...rules, ""]);
  };

  const updateRule = (index: number, value: string) => {
    const newRules = [...rules];
    newRules[index] = value;
    setRules(newRules);
  };

  const removeRule = (index: number) => {
    if (rules.length > 1) {
      const newRules = [...rules];
      newRules.splice(index, 1);
      setRules(newRules);
    }
  };

  const addPrerequisite = () => {
    setPrerequisites([...prerequisites, ""]);
  };

  const updatePrerequisite = (index: number, value: string) => {
    const newPrerequisites = [...prerequisites];
    newPrerequisites[index] = value;
    setPrerequisites(newPrerequisites);
  };

  const removePrerequisite = (index: number) => {
    if (prerequisites.length > 1) {
      const newPrerequisites = [...prerequisites];
      newPrerequisites.splice(index, 1);
      setPrerequisites(newPrerequisites);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Workshop Name</FormLabel>
                <FormControl>
                  <Input placeholder="Introduction to React" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="domainTag"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Domain Tag</FormLabel>
                <FormControl>
                  <Input placeholder="Web Development" {...field} />
                </FormControl>
                <FormDescription>
                  Category or field of the workshop (e.g., "Web Development", "AI", "Design")
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="Provide a detailed description of the workshop"
                  className="min-h-[100px]"
                  {...field} 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <FormField
            control={form.control}
            name="date"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Date</FormLabel>
                <FormControl>
                  <Input type="date" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="startTime"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Start Time</FormLabel>
                <FormControl>
                  <Input type="time" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="endTime"
            render={({ field }) => (
              <FormItem>
                <FormLabel>End Time</FormLabel>
                <FormControl>
                  <Input type="time" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        
        <FormField
          control={form.control}
          name="location"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Location</FormLabel>
              <FormControl>
                <Input placeholder="Tech Hub, Building A, Room 101" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="eventInfo"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Event Information</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="Additional information about the event"
                  className="min-h-[80px]"
                  {...field} 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        {/* Members handling the event */}
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <FormLabel className="text-base">Members Handling the Event</FormLabel>
            <Button type="button" variant="outline" size="sm" onClick={addMember}>
              <Plus className="h-4 w-4 mr-1" />
              Add Member
            </Button>
          </div>
          
          {members.map((member, index) => (
            <div key={index} className="flex gap-2 items-start">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-grow">
                <div>
                  <Input
                    placeholder="Member Name"
                    value={member.name}
                    onChange={(e) => updateMember(index, 'name', e.target.value)}
                  />
                </div>
                <div>
                  <Input
                    placeholder="Designation"
                    value={member.designation}
                    onChange={(e) => updateMember(index, 'designation', e.target.value)}
                  />
                </div>
              </div>
              <Button 
                type="button" 
                variant="ghost" 
                size="icon" 
                onClick={() => removeMember(index)}
                disabled={members.length === 1}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
        
        {/* Event Schedule */}
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <FormLabel className="text-base">Event Schedule</FormLabel>
            <Button type="button" variant="outline" size="sm" onClick={addScheduleItem}>
              <Plus className="h-4 w-4 mr-1" />
              Add Schedule Item
            </Button>
          </div>
          
          {scheduleItems.map((item, index) => (
            <div key={index} className="flex gap-2 items-start">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 flex-grow">
                <div>
                  <Input
                    placeholder="Time (e.g., 10:00 - 11:00)"
                    value={item.time}
                    onChange={(e) => updateScheduleItem(index, 'time', e.target.value)}
                  />
                </div>
                <div className="md:col-span-2">
                  <Input
                    placeholder="Activity"
                    value={item.activity}
                    onChange={(e) => updateScheduleItem(index, 'activity', e.target.value)}
                  />
                </div>
              </div>
              <Button 
                type="button" 
                variant="ghost" 
                size="icon" 
                onClick={() => removeScheduleItem(index)}
                disabled={scheduleItems.length === 1}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
        
        {/* Rules and Regulations */}
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <FormLabel className="text-base">Rules and Regulations</FormLabel>
            <Button type="button" variant="outline" size="sm" onClick={addRule}>
              <Plus className="h-4 w-4 mr-1" />
              Add Rule
            </Button>
          </div>
          
          {rules.map((rule, index) => (
            <div key={index} className="flex gap-2 items-center">
              <Input
                placeholder="Rule"
                value={rule}
                onChange={(e) => updateRule(index, e.target.value)}
                className="flex-grow"
              />
              <Button 
                type="button" 
                variant="ghost" 
                size="icon" 
                onClick={() => removeRule(index)}
                disabled={rules.length === 1}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
        
        {/* Prerequisites */}
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <FormLabel className="text-base">Prerequisites</FormLabel>
            <Button type="button" variant="outline" size="sm" onClick={addPrerequisite}>
              <Plus className="h-4 w-4 mr-1" />
              Add Prerequisite
            </Button>
          </div>
          
          {prerequisites.map((prerequisite, index) => (
            <div key={index} className="flex gap-2 items-center">
              <Input
                placeholder="Prerequisite"
                value={prerequisite}
                onChange={(e) => updatePrerequisite(index, e.target.value)}
                className="flex-grow"
              />
              <Button 
                type="button" 
                variant="ghost" 
                size="icon" 
                onClick={() => removePrerequisite(index)}
                disabled={prerequisites.length === 1}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
        
        <Button type="submit" className="w-full">Create Workshop</Button>
      </form>
    </Form>
  );
}
