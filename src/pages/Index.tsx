
import React, { useState } from "react";
import { events } from "@/data/events";
import EventCard from "@/components/EventCard";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar, MapPin, Plus, TrendingUp, Users, Star } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { useApiQuery } from "@/hooks/useApiQuery";
import { glugApi } from "@/api/glugApi";
import { Glug } from "@/types/api-types";
import { Skeleton } from "@/components/ui/skeleton";

const Index: React.FC = () => {
  // Get first 6 events for featured section
  const featuredEvents = events.slice(0, 6);
  const [followedGlugs, setFollowedGlugs] = useState<number[]>(() => {
    const savedFollows = localStorage.getItem('followedGlugs');
    return savedFollows ? JSON.parse(savedFollows) : [];
  });

  const { data: glugs, isLoading } = useApiQuery<Glug[]>(glugApi.getAllGlugs);

  const toggleFollow = (glugId: number) => {
    setFollowedGlugs(prev => {
      const isFollowed = prev.includes(glugId);
      const newFollowed = isFollowed
        ? prev.filter(id => id !== glugId)
        : [...prev, glugId];
      
      localStorage.setItem('followedGlugs', JSON.stringify(newFollowed));
      return newFollowed;
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-meetup-green/90 to-emerald-600 text-white py-16 dark:from-emerald-800 dark:to-emerald-950">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Find your next favorite event
              </h1>
              <p className="text-lg mb-8 max-w-lg">
                Join exciting hackathons, workshops, and gatherings in your community. 
                Connect with like-minded people and expand your network.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/events/create">
                  <Button className="w-full sm:w-auto bg-white text-meetup-green hover:bg-gray-100">
                    Host an Event
                  </Button>
                </Link>
                <Link to="/workshops">
                  <Button className="w-full sm:w-auto bg-white text-meetup-green hover:bg-gray-100">
                    Explore Events
                  </Button>
                </Link>
              </div>
            </div>
            <div className="md:w-1/2">
              <img 
                src="/placeholder.svg" 
                alt="Events illustration" 
                className="w-full max-w-md mx-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Glugs Section */}
      <section className="py-12 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold dark:text-white">Featured Clubs (GLUGs)</h2>
            <Link to="/clubs" className="text-meetup-green hover:text-meetup-green/80 font-medium flex items-center dark:text-emerald-400">
              View all <TrendingUp className="ml-1 h-4 w-4" />
            </Link>
          </div>
          
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <Card key={item} className="border dark:border-gray-700">
                  <CardHeader>
                    <Skeleton className="h-6 w-3/4 mb-2" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-2/3" />
                  </CardHeader>
                  <CardContent>
                    <Skeleton className="h-4 w-full mb-2" />
                    <Skeleton className="h-4 w-4/5" />
                  </CardContent>
                  <CardFooter>
                    <Skeleton className="h-9 w-full" />
                  </CardFooter>
                </Card>
              ))}
            </div>
          ) : (!glugs || glugs.length === 0) ? (
            <div className="text-center py-12 bg-white rounded-lg shadow-sm dark:bg-gray-800 dark:text-white">
              <h2 className="text-xl mb-4">No clubs found</h2>
              <p className="mb-6 text-gray-600 dark:text-gray-400">
                Be the first to create a club in your community!
              </p>
              <Link to="/clubs/register">
                <Button className="flex items-center mx-auto bg-meetup-green hover:bg-meetup-green/90">
                  <Plus className="h-4 w-4 mr-1" />
                  Create Club
                </Button>
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {glugs.slice(0, 6).map((glug) => (
                <Card key={glug.id} className="transition-all hover:shadow-md dark:border-gray-700 dark:bg-gray-800">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-xl dark:text-white">{glug.glug_name}</CardTitle>
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className={`${followedGlugs.includes(glug.id) ? "text-yellow-500" : "text-gray-400"}`}
                        onClick={() => toggleFollow(glug.id)}
                      >
                        <Star className="h-5 w-5" fill={followedGlugs.includes(glug.id) ? "currentColor" : "none"} />
                      </Button>
                    </div>
                    <CardDescription className="line-clamp-2 dark:text-gray-300">{glug.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-2">
                      <MapPin className="h-4 w-4" />
                      <span className="line-clamp-1">{glug.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                      <Users className="h-4 w-4" />
                      <span>{glug.organization}</span>
                    </div>
                  </CardContent>
                  <CardFooter className="border-t pt-4 dark:border-gray-700">
                    <Link to={`/clubs/${glug.id}`} className="w-full">
                      <Button variant="outline" className="w-full dark:border-gray-600 dark:text-white">
                        View Details
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Featured Events Section */}
      <section className="py-12 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold dark:text-white">Featured Events</h2>
            <Link to="/workshops" className="text-meetup-green hover:text-meetup-green/80 font-medium flex items-center dark:text-emerald-400">
              View all <TrendingUp className="ml-1 h-4 w-4" />
            </Link>
          </div>

          {featuredEvents.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-lg shadow-sm dark:bg-gray-700 dark:text-white">
              <h2 className="text-xl mb-4">No events scheduled yet</h2>
              <p className="mb-6 text-gray-600 dark:text-gray-300">
                Be the first to host an event in your community!
              </p>
              <Link to="/events/create">
                <Button className="flex items-center mx-auto bg-meetup-green hover:bg-meetup-green/90">
                  <Plus className="h-4 w-4 mr-1" />
                  Host Event
                </Button>
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg text-center dark:bg-gray-800">
              <div className="w-12 h-12 bg-meetup-lightGreen rounded-full flex items-center justify-center mx-auto mb-3 dark:bg-emerald-900">
                <Calendar className="h-6 w-6 text-meetup-green dark:text-emerald-400" />
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-2 dark:text-white">{events.length}+</h3>
              <p className="text-gray-600 dark:text-gray-300">Active Events</p>
            </div>
            <div className="bg-white p-6 rounded-lg text-center dark:bg-gray-800">
              <div className="w-12 h-12 bg-meetup-lightGreen rounded-full flex items-center justify-center mx-auto mb-3 dark:bg-emerald-900">
                <Users className="h-6 w-6 text-meetup-green dark:text-emerald-400" />
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-2 dark:text-white">5,000+</h3>
              <p className="text-gray-600 dark:text-gray-300">Community Members</p>
            </div>
            <div className="bg-white p-6 rounded-lg text-center dark:bg-gray-800">
              <div className="w-12 h-12 bg-meetup-lightGreen rounded-full flex items-center justify-center mx-auto mb-3 dark:bg-emerald-900">
                <MapPin className="h-6 w-6 text-meetup-green dark:text-emerald-400" />
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-2 dark:text-white">20+</h3>
              <p className="text-gray-600 dark:text-gray-300">Cities Covered</p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-12 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="bg-meetup-green text-white rounded-lg p-8 text-center dark:bg-emerald-800">
            <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
            <p className="max-w-2xl mx-auto mb-6">
              Subscribe to our newsletter to get updates on the latest events and community news
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input 
                placeholder="Your email address" 
                className="bg-white/90 border-0 placeholder:text-gray-500"
              />
              <Button className="bg-white text-meetup-green hover:bg-gray-100">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
