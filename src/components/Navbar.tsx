
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar, Plus, Search } from "lucide-react";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <Calendar className="h-6 w-6 text-meetup-green" />
          <span className="text-xl font-bold">Hacktivist</span>
        </Link>
        
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-gray-700 hover:text-gray-900 font-medium">
            Home
          </Link>
          <Link to="/explore" className="text-gray-700 hover:text-gray-900 font-medium">
            Explore
          </Link>
          <Link to="/about" className="text-gray-700 hover:text-gray-900 font-medium">
            About
          </Link>
        </div>
        
        <div className="flex items-center space-x-3">
          <Link to="/search">
            <Button variant="ghost" size="icon" className="text-gray-700">
              <Search className="h-5 w-5" />
            </Button>
          </Link>
          <Link to="/events/create">
            <Button className="flex items-center gap-1 bg-meetup-green hover:bg-meetup-green/90">
              <Plus className="h-4 w-4" />
              <span className="hidden sm:inline">Create Event</span>
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
