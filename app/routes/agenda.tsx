import type { Route } from "./+types/agenda";
import { Card } from "../components/Card";
import { MapPin } from "lucide-react";
import events from "../data/events.json";

export function meta(_args: Route.MetaArgs) {
  return [
    { title: "Agenda - Diab&Team 26-07" },
    {
      name: "description",
      content:
        "Retrouvez tous les prochains événements, rencontres et ateliers organisés par Diab&Team 26-07.",
    },
  ];
}

export default function Agenda() {
  const assocEvents = events.filter((e) => e.type === "association");
  const partnerEvents = events.filter((e) => e.type === "partenaire");

  const EventCard = ({ event }: { event: any }) => (
    <Card className={`p-0 overflow-hidden flex flex-col md:flex-row transition-all hover:shadow-md border-l-4 ${event.type === 'association' ? 'border-l-primary' : 'border-l-accent'}`}>
      <div className="bg-gray-50 p-6 md:w-48 flex flex-col items-center justify-center text-center border-b md:border-b-0 md:border-r border-gray-ui/50 shrink-0">
        <span className={`text-3xl font-bold mb-1 ${event.type === 'association' ? 'text-primary' : 'text-accent'}`}>
          {new Date(event.date).getDate()}
        </span>
        <span className="text-lg font-medium text-gray-600 uppercase">
          {new Date(event.date).toLocaleDateString("fr-FR", { month: "short" })}
        </span>
        <span className="text-sm text-gray-400 mt-1">
          {new Date(event.date).getFullYear()}
        </span>
      </div>
      
      <div className="p-6 flex-grow flex flex-col justify-center">
        <h3 className="text-2xl font-bold mb-3 text-text-base">{event.title}</h3>
        <p className="text-gray-600 mb-4">{event.description}</p>
        
        <div className="flex flex-wrap gap-4 text-sm text-gray-500">
          {event.location && (
            <div className="flex items-center gap-1 bg-gray-100 px-3 py-1 rounded-full">
              <MapPin size={14} /> 
              <span>{event.location}</span>
            </div>
          )}
        </div>
      </div>
    </Card>
  );

  return (
    <div className="container-responsive py-12 md:py-20">
      <div className="mb-12">
        <h1 className="text-4xl font-bold font-heading mb-4 text-primary">
          Agenda
        </h1>
        <p className="text-gray-600 max-w-xl">
          Retrouvez ici toutes les dates de nos prochains événements.
        </p>
      </div>

      {assocEvents.length > 0 && (
        <section className="mb-16">
          <h2 className="text-2xl font-bold font-heading mb-6 text-primary border-b-2 border-primary/20 pb-2 inline-block">
            Événements de l'Association
          </h2>
          <div className="space-y-6">
            {assocEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </section>
      )}

      {partnerEvents.length > 0 && (
        <section>
          <h2 className="text-2xl font-bold font-heading mb-6 text-accent border-b-2 border-accent/20 pb-2 inline-block">
            Événements Partenaires
          </h2>
          <div className="space-y-6">
            {partnerEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
