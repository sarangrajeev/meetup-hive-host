
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar, Plus, Search } from "lucide-react";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <Calendar className="h-6 w-6 text-black" />
          <span className="text-xl font-bold">Hacktivist</span>
        </Link>
        
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-black hover:text-gray-700 font-medium">
            Home
          </Link>
          <Link to="/clubs" className="text-black hover:text-gray-700 font-medium">
            Clubs
          </Link>
          <Link to="/meetups" className="text-black hover:text-gray-700 font-medium">
            Meetups
          </Link>
          <Link to="/about" className="text-black hover:text-gray-700 font-medium">
            About Us
          </Link>
        </div>
        
        <div className="flex items-center space-x-3">
          <Link to="/search">
            <Button variant="ghost" size="icon" className="text-black">
              <Search className="h-5 w-5" />
            </Button>
          </Link>
          <Link to="/events/create">
            <Button className="flex items-center gap-1 bg-black hover:bg-gray-800 text-white">
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
