
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <Globe className="h-6 w-6 text-black" />
          <span className="text-xl font-bold">Hacktivist</span>
        </Link>
        
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/clubs" className="text-black hover:text-gray-700 font-medium">
            Discover Clubs
          </Link>
          <Link to="/explore" className="text-black hover:text-gray-700 font-medium">
            Events
          </Link>
          <Link to="/resources" className="text-black hover:text-gray-700 font-medium">
            Resources
          </Link>
          <Link to="/forum" className="text-black hover:text-gray-700 font-medium">
            Forum
          </Link>
          <Link to="/about" className="text-black hover:text-gray-700 font-medium">
            About
          </Link>
        </div>
        
        <div className="flex items-center space-x-3">
          <Link to="/signin">
            <Button variant="ghost" className="text-black">
              Sign In
            </Button>
          </Link>
          <Link to="/signup">
            <Button className="bg-black hover:bg-gray-800 text-white">
              Join Now
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
