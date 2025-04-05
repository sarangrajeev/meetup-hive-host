
import React from "react";
import { Event } from "@/types/event";

interface EventSponsorsProps {
  event: Event;
}

const EventSponsors: React.FC<EventSponsorsProps> = ({ event }) => {
  const { sponsors } = event;

  if (!sponsors || sponsors.length === 0) {
    return null;
  }

  const platinumSponsors = sponsors.filter(
    (sponsor) => sponsor.level === "platinum"
  );
  const goldSponsors = sponsors.filter((sponsor) => sponsor.level === "gold");
  const silverSponsors = sponsors.filter(
    (sponsor) => sponsor.level === "silver"
  );
  const bronzeSponsors = sponsors.filter(
    (sponsor) => sponsor.level === "bronze"
  );

  return (
    <div className="my-8">
      <h2 className="text-2xl font-bold mb-4">Sponsors</h2>
      <p className="mb-4">
        Interested in sponsoring this event? Check out our sponsorship deck{" "}
        <a href="#" className="text-meetup-green hover:underline">
          here
        </a>{" "}
        for all the details.
      </p>

      {platinumSponsors.length > 0 && (
        <div className="mb-6">
          <h3 className="text-xl font-bold mb-3">Platinum</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {platinumSponsors.map((sponsor, index) => (
              <a
                key={index}
                href={sponsor.website}
                target="_blank"
                rel="noopener noreferrer"
                className="border p-4 rounded-lg flex items-center justify-center hover:shadow-md transition-shadow"
              >
                <img
                  src={sponsor.logoUrl}
                  alt={sponsor.name}
                  className="max-h-16 max-w-full object-contain"
                />
              </a>
            ))}
          </div>
        </div>
      )}

      {goldSponsors.length > 0 && (
        <div className="mb-6">
          <h3 className="text-xl font-bold mb-3">Gold</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {goldSponsors.map((sponsor, index) => (
              <a
                key={index}
                href={sponsor.website}
                target="_blank"
                rel="noopener noreferrer"
                className="border p-4 rounded-lg flex items-center justify-center hover:shadow-md transition-shadow"
              >
                <img
                  src={sponsor.logoUrl}
                  alt={sponsor.name}
                  className="max-h-12 max-w-full object-contain"
                />
              </a>
            ))}
          </div>
        </div>
      )}

      {silverSponsors.length > 0 && (
        <div className="mb-6">
          <h3 className="text-xl font-bold mb-3">Silver</h3>
          <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-4">
            {silverSponsors.map((sponsor, index) => (
              <a
                key={index}
                href={sponsor.website}
                target="_blank"
                rel="noopener noreferrer"
                className="border p-3 rounded-lg flex items-center justify-center hover:shadow-md transition-shadow"
              >
                <img
                  src={sponsor.logoUrl}
                  alt={sponsor.name}
                  className="max-h-10 max-w-full object-contain"
                />
              </a>
            ))}
          </div>
        </div>
      )}

      {bronzeSponsors.length > 0 && (
        <div>
          <h3 className="text-xl font-bold mb-3">Bronze</h3>
          <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3">
            {bronzeSponsors.map((sponsor, index) => (
              <a
                key={index}
                href={sponsor.website}
                target="_blank"
                rel="noopener noreferrer"
                className="border p-2 rounded-lg flex items-center justify-center hover:shadow-md transition-shadow"
              >
                <img
                  src={sponsor.logoUrl}
                  alt={sponsor.name}
                  className="max-h-8 max-w-full object-contain"
                />
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default EventSponsors;
