
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar, Plus, Moon, Sun } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Navbar: React.FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const { toast } = useToast();
  
  // Initialize theme from localStorage if available
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
    localStorage.setItem('theme', newTheme);
    
    toast({
      title: `${newTheme.charAt(0).toUpperCase() + newTheme.slice(1)} mode activated`,
      duration: 2000
    });
  };

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <Calendar className="h-6 w-6 text-black dark:text-white" />
          <span className="text-xl font-bold text-black dark:text-white">Hacktivist</span>
        </Link>
        
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-black dark:text-white hover:text-gray-700 dark:hover:text-gray-300 font-medium">
            Home
          </Link>
          <Link to="/clubs" className="text-black dark:text-white hover:text-gray-700 dark:hover:text-gray-300 font-medium">
            Clubs
          </Link>
          <Link to="/workshops" className="text-black dark:text-white hover:text-gray-700 dark:hover:text-gray-300 font-medium">
            Workshops
          </Link>
          <Link to="/about" className="text-black dark:text-white hover:text-gray-700 dark:hover:text-gray-300 font-medium">
            About Us
          </Link>
        </div>
        
        <div className="flex items-center space-x-4">
          <Button 
            variant="outline" 
            size="icon" 
            onClick={toggleTheme} 
            className="rounded-full"
          >
            {theme === 'light' ? (
              <Moon className="h-5 w-5" />
            ) : (
              <Sun className="h-5 w-5" />
            )}
          </Button>
          
          <Link to="/events/create">
            <Button className="flex items-center gap-1 bg-black hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200 text-white">
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
