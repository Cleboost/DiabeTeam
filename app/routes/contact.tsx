import type { Route } from "./+types/contact";
import { Card } from "../components/Card";
import { Mail, MapPin, Phone } from "lucide-react";

export function meta(_args: Route.MetaArgs) {
  return [
    { title: "Contact - Diab&Team 26-07" },
    {
      name: "description",
      content:
        "Contactez l'association Diab&Team 26-07 par email ou téléphone pour toute question.",
    },
  ];
}

export default function Contact() {
  return (
    <div className="container-responsive py-12 md:py-20">
      <h1 className="text-4xl font-bold font-heading mb-4 text-center text-primary">
        Contactez-nous
      </h1>
      <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
        Une question sur l'association, une demande de partenariat ou simplement envie d'échanger ? Nous sommes à votre écoute.
      </p>

      <div className="max-w-3xl mx-auto space-y-8">
        <Card className="p-8 flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
          <div className="bg-primary/10 p-4 rounded-full text-primary shrink-0">
            <Mail size={32} />
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-xl mb-2">Par Email</h3>
            <p className="text-gray-600 mb-2">
              Pour toutes vos questions, demandes d'adhésion ou de partenariat.
            </p>
            <a 
              href="mailto:diabeteam2607@gmail.com" 
              className="text-primary font-bold text-lg hover:underline"
            >
              diabeteam2607@gmail.com
            </a>
          </div>
        </Card>

        <Card className="p-8 flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
          <div className="bg-primary/10 p-4 rounded-full text-primary shrink-0">
            <Phone size={32} />
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-xl mb-2">Par Téléphone</h3>
            <p className="text-gray-600 mb-2">
              Vous pouvez nous joindre directement pour échanger de vive voix.
            </p>
            <a 
              href="tel:+33782120163" 
              className="text-primary font-bold text-lg hover:underline"
            >
              07 82 12 01 63
            </a>
          </div>
        </Card>

        <Card className="p-8 flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
          <div className="bg-primary/10 p-4 rounded-full text-primary shrink-0">
            <MapPin size={32} />
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-xl mb-2">Localisation</h3>
            <p className="text-gray-600">
              Notre association est basée à <strong>Valence (26)</strong>.<br />
              Nos actions rayonnent sur toute la <strong>Drôme</strong> et l'<strong>Ardèche</strong>.
            </p>
          </div>
        </Card>

        <div className="bg-accent/10 p-6 rounded-2xl border border-accent/20 text-center">
          <h3 className="font-bold text-lg mb-2">Besoin d'aide urgente ?</h3>
          <p className="text-gray-700">
            L'association ne remplace pas une consultation médicale. En cas d'urgence médicale liée au diabète, contactez le <strong>15</strong> ou votre service hospitalier référent.
          </p>
        </div>
      </div>
    </div>
  );
}
