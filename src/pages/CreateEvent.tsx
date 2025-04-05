
import React from "react";
import Navbar from "@/components/Navbar";
import CreateEventForm from "@/components/CreateEventForm";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CreateEvent: React.FC = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <Button
          variant="outline"
          className="mb-6 flex items-center"
          onClick={() => navigate("/")}
        >
          <ChevronLeft className="h-4 w-4 mr-1" />
          Back to Events
        </Button>
        
        <div className="bg-white rounded-lg shadow-sm p-6 max-w-2xl mx-auto">
          <h1 className="text-2xl font-bold mb-6">Host a New Event</h1>
          <CreateEventForm />
        </div>
      </div>
    </div>
  );
};

export default CreateEvent;
