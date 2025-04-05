
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

const Navbar: React.FC = () => {
  return (
    <nav className="border-b">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">
          MeetupHive
        </Link>
        <Link to="/events/create">
          <Button className="flex items-center bg-meetup-green hover:bg-meetup-green/90">
            <Plus className="h-4 w-4 mr-1" />
            Create Event
          </Button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
