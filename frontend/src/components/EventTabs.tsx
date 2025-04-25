
import React, { useState } from "react";
import { Event } from "@/types/event";
import { cn } from "@/lib/utils";

interface EventTabsProps {
  event: Event;
}

const EventTabs: React.FC<EventTabsProps> = ({ event }) => {
  const [activeTab, setActiveTab] = useState<string>("information");

  const tabs = [
    { id: "information", label: "Event Information" },
    { id: "proposal", label: "Talk Proposal" },
  ];

  return (
    <div>
      <div className="border-b">
        <div className="flex">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "px-6 py-3 text-sm font-medium",
                activeTab === tab.id
                  ? "border-b-2 border-meetup-green text-meetup-green"
                  : "text-gray-600 hover:text-gray-900"
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className="py-6">
        {activeTab === "information" && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Description</h2>
            <p className="mb-4">{event.description}</p>
            {event.mapUrl && (
              <div>
                <p className="mb-2">
                  OSM Map location:{" "}
                  <a
                    href={event.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    {event.mapUrl}
                  </a>
                </p>
              </div>
            )}
          </div>
        )}

        {activeTab === "proposal" && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Submit a Talk Proposal</h2>
            <p className="mb-4">
              Want to speak at {event.title}? Submit your talk proposal by
              filling out the form below.
            </p>
            <form className="space-y-4">
              <div>
                <label className="block mb-1">Topic Title</label>
                <input
                  type="text"
                  className="w-full p-2 border rounded"
                  placeholder="Enter your talk title"
                />
              </div>
              <div>
                <label className="block mb-1">Description</label>
                <textarea
                  className="w-full p-2 border rounded"
                  rows={4}
                  placeholder="Describe your talk (technologies, concepts, experience level)"
                />
              </div>
              <div>
                <label className="block mb-1">Your Name</label>
                <input
                  type="text"
                  className="w-full p-2 border rounded"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label className="block mb-1">Email</label>
                <input
                  type="email"
                  className="w-full p-2 border rounded"
                  placeholder="Your email address"
                />
              </div>
              <button
                type="submit"
                className="bg-meetup-green hover:bg-meetup-green/90 text-white px-4 py-2 rounded"
              >
                Submit Proposal
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default EventTabs;
