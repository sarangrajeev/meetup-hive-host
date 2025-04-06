
import React, { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { X, Plus } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(3, { message: "Workshop name must be at least 3 characters." }),
  domainTag: z.string().min(2, { message: "Domain tag is required." }),
  description: z.string().min(10, { message: "Please provide a more detailed description." }),
  date: z.string().min(1, { message: "Date is required." }),
  startTime: z.string().min(1, { message: "Start time is required." }),
  endTime: z.string().min(1, { message: "End time is required." }),
  location: z.string().min(3, { message: "Location is required." }),
  eventInfo: z.string().min(10, { message: "Please provide event information." }),
  // Complex fields are managed separately
});

interface ClubWorkshopFormProps {
  clubId: string;
}

const ClubWorkshopForm: React.FC<ClubWorkshopFormProps> = ({ clubId }) => {
  const [memberHandlers, setMemberHandlers] = useState<{ name: string; designation: string }[]>([
    { name: "", designation: "" }
  ]);
  
  const [scheduleItems, setScheduleItems] = useState<{ time: string; activity: string }[]>([
    { time: "", activity: "" }
  ]);
  
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
    }
  });

  const handleAddMemberHandler = () => {
    setMemberHandlers([...memberHandlers, { name: "", designation: "" }]);
  };

  const handleRemoveMemberHandler = (index: number) => {
    if (memberHandlers.length > 1) {
      setMemberHandlers(memberHandlers.filter((_, i) => i !== index));
    }
  };

  const handleMemberHandlerChange = (index: number, field: 'name' | 'designation', value: string) => {
    const updatedHandlers = [...memberHandlers];
    updatedHandlers[index][field] = value;
    setMemberHandlers(updatedHandlers);
  };

  const handleAddScheduleItem = () => {
    setScheduleItems([...scheduleItems, { time: "", activity: "" }]);
  };

  const handleRemoveScheduleItem = (index: number) => {
    if (scheduleItems.length > 1) {
      setScheduleItems(scheduleItems.filter((_, i) => i !== index));
    }
  };

  const handleScheduleItemChange = (index: number, field: 'time' | 'activity', value: string) => {
    const updatedItems = [...scheduleItems];
    updatedItems[index][field] = value;
    setScheduleItems(updatedItems);
  };

  const handleAddRule = () => {
    setRules([...rules, ""]);
  };

  const handleRemoveRule = (index: number) => {
    if (rules.length > 1) {
      setRules(rules.filter((_, i) => i !== index));
    }
  };

  const handleRuleChange = (index: number, value: string) => {
    const updatedRules = [...rules];
    updatedRules[index] = value;
    setRules(updatedRules);
  };

  const handleAddPrerequisite = () => {
    setPrerequisites([...prerequisites, ""]);
  };

  const handleRemovePrerequisite = (index: number) => {
    if (prerequisites.length > 1) {
      setPrerequisites(prerequisites.filter((_, i) => i !== index));
    }
  };

  const handlePrerequisiteChange = (index: number, value: string) => {
    const updatedPrerequisites = [...prerequisites];
    updatedPrerequisites[index] = value;
    setPrerequisites(updatedPrerequisites);
  };

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    // Filter out empty entries
    const filteredHandlers = memberHandlers.filter(handler => handler.name.trim() !== "" && handler.designation.trim() !== "");
    const filteredSchedule = scheduleItems.filter(item => item.time.trim() !== "" && item.activity.trim() !== "");
    const filteredRules = rules.filter(rule => rule.trim() !== "");
    const filteredPrerequisites = prerequisites.filter(prereq => prereq.trim() !== "");

    // Create workshop object with all data
    const workshopData = {
      ...data,
      clubId,
      memberHandlers: filteredHandlers,
      schedule: filteredSchedule,
      rules: filteredRules,
      prerequisites: filteredPrerequisites,
    };

    console.log("Workshop created:", workshopData);
    
    toast({
      title: "Workshop Created!",
      description: "Your workshop has been successfully created."
    });
    
    // Reset form
    form.reset();
    setMemberHandlers([{ name: "", designation: "" }]);
    setScheduleItems([{ time: "", activity: "" }]);
    setRules([""]);
    setPrerequisites([""]);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Create a New Workshop</CardTitle>
        <CardDescription>
          Fill out the form below to host a new workshop for your club members and the community.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <Tabs defaultValue="basic" className="w-full">
              <TabsList className="grid grid-cols-4 mb-6">
                <TabsTrigger value="basic">Basic Info</TabsTrigger>
                <TabsTrigger value="details">Event Details</TabsTrigger>
                <TabsTrigger value="members">Event Handlers</TabsTrigger>
                <TabsTrigger value="rules">Rules & Prerequisites</TabsTrigger>
              </TabsList>
              
              <TabsContent value="basic" className="space-y-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Workshop Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter workshop name" {...field} />
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
                        <Input placeholder="e.g., Web Development, Data Science" {...field} />
                      </FormControl>
                      <FormDescription>
                        A category that best describes this workshop
                      </FormDescription>
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
                          placeholder="Describe what participants will learn" 
                          className="min-h-[100px]" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </TabsContent>
              
              <TabsContent value="details" className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                  
                  <div className="flex gap-4">
                    <FormField
                      control={form.control}
                      name="startTime"
                      render={({ field }) => (
                        <FormItem className="flex-1">
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
                        <FormItem className="flex-1">
                          <FormLabel>End Time</FormLabel>
                          <FormControl>
                            <Input type="time" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
                
                <FormField
                  control={form.control}
                  name="location"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Location</FormLabel>
                      <FormControl>
                        <Input placeholder="Workshop venue address" {...field} />
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
                          placeholder="Additional details about the workshop" 
                          className="min-h-[100px]" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <FormLabel className="text-base">Workshop Schedule</FormLabel>
                    <Button 
                      type="button" 
                      variant="outline" 
                      size="sm" 
                      onClick={handleAddScheduleItem}
                    >
                      <Plus className="h-4 w-4 mr-1" /> Add Item
                    </Button>
                  </div>
                  
                  {scheduleItems.map((item, index) => (
                    <div key={index} className="flex gap-4 items-start">
                      <div className="flex-1">
                        <Input 
                          placeholder="Time slot (e.g., 10:00 - 11:30)" 
                          value={item.time}
                          onChange={(e) => handleScheduleItemChange(index, 'time', e.target.value)}
                        />
                      </div>
                      <div className="flex-[2]">
                        <Input 
                          placeholder="Activity description" 
                          value={item.activity}
                          onChange={(e) => handleScheduleItemChange(index, 'activity', e.target.value)}
                        />
                      </div>
                      <Button 
                        type="button" 
                        variant="ghost" 
                        size="sm" 
                        onClick={() => handleRemoveScheduleItem(index)}
                        disabled={scheduleItems.length === 1}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="members" className="space-y-4">
                <div className="flex justify-between items-center">
                  <FormLabel className="text-base">Event Handlers</FormLabel>
                  <Button 
                    type="button" 
                    variant="outline" 
                    size="sm" 
                    onClick={handleAddMemberHandler}
                  >
                    <Plus className="h-4 w-4 mr-1" /> Add Member
                  </Button>
                </div>
                
                {memberHandlers.map((handler, index) => (
                  <div key={index} className="flex gap-4 items-start">
                    <div className="flex-1">
                      <Input 
                        placeholder="Member name" 
                        value={handler.name}
                        onChange={(e) => handleMemberHandlerChange(index, 'name', e.target.value)}
                      />
                    </div>
                    <div className="flex-1">
                      <Input 
                        placeholder="Designation" 
                        value={handler.designation}
                        onChange={(e) => handleMemberHandlerChange(index, 'designation', e.target.value)}
                      />
                    </div>
                    <Button 
                      type="button" 
                      variant="ghost" 
                      size="sm" 
                      onClick={() => handleRemoveMemberHandler(index)}
                      disabled={memberHandlers.length === 1}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </TabsContent>
              
              <TabsContent value="rules" className="space-y-6">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <FormLabel className="text-base">Rules and Regulations</FormLabel>
                    <Button 
                      type="button" 
                      variant="outline" 
                      size="sm" 
                      onClick={handleAddRule}
                    >
                      <Plus className="h-4 w-4 mr-1" /> Add Rule
                    </Button>
                  </div>
                  
                  {rules.map((rule, index) => (
                    <div key={index} className="flex gap-2 items-center">
                      <div className="flex-1">
                        <Input 
                          placeholder="Workshop rule" 
                          value={rule}
                          onChange={(e) => handleRuleChange(index, e.target.value)}
                        />
                      </div>
                      <Button 
                        type="button" 
                        variant="ghost" 
                        size="sm" 
                        onClick={() => handleRemoveRule(index)}
                        disabled={rules.length === 1}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <FormLabel className="text-base">Prerequisites</FormLabel>
                    <Button 
                      type="button" 
                      variant="outline" 
                      size="sm" 
                      onClick={handleAddPrerequisite}
                    >
                      <Plus className="h-4 w-4 mr-1" /> Add Prerequisite
                    </Button>
                  </div>
                  
                  {prerequisites.map((prereq, index) => (
                    <div key={index} className="flex gap-2 items-center">
                      <div className="flex-1">
                        <Input 
                          placeholder="Required skill or material" 
                          value={prereq}
                          onChange={(e) => handlePrerequisiteChange(index, e.target.value)}
                        />
                      </div>
                      <Button 
                        type="button" 
                        variant="ghost" 
                        size="sm" 
                        onClick={() => handleRemovePrerequisite(index)}
                        disabled={prerequisites.length === 1}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
            
            <CardFooter className="px-0 pt-4 border-t">
              <Button type="submit" className="ml-auto bg-black hover:bg-gray-800">
                Create Workshop
              </Button>
            </CardFooter>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default ClubWorkshopForm;
