import type { Route } from "./+types/mentions-legales";

export function meta(_args: Route.MetaArgs) {
  return [
    { title: "Mentions Légales - Diab&Team 26-07" },
    {
      name: "description",
      content: "Mentions légales de l'association Diab&Team 26-07.",
    },
  ];
}

export default function MentionsLegales() {
  return (
    <div className="container-responsive py-12 md:py-20">
      <h1 className="text-3xl font-bold font-heading mb-8 text-primary">Mentions Légales</h1>
      
      <div className="prose prose-gray max-w-none space-y-8">
        <section>
          <h2 className="text-xl font-bold text-text-base mb-4">1. Éditeur du site</h2>
          <p>
            Le site internet <strong>diabeteam.fr</strong> ainsi que l'ensemble de ses sous domaines est édité par l'association <strong>Diab&Team 26-07</strong>.<br/>
            {/* Association loi 1901 affiliée à l'AJD (Aide aux Jeunes Diabétiques). */}
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li><strong>Siège social :</strong> Centre Hospitalier de Valence, service Pédiatrie. 179 bd maréchal juin
26000 Valence</li>
            <li><strong>Email :</strong> diabeteam2607@gmail.com</li>
            <li><strong>Directeur de la publication :</strong> Vincent</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-text-base mb-4">2. Hébergement</h2>
          <p>
            Ce site est hébergé par :<br/>
            <strong>GitHub Pages</strong> (GitHub, Inc.)<br/>
            88 Colin P. Kelly Jr. Street<br/>
            San Francisco, CA 94107<br/>
            États-Unis<br/>
            <a href="https://pages.github.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://pages.github.com/</a>
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-text-base mb-4">3. Propriété intellectuelle</h2>
          <p>
            L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques. La reproduction de tout ou partie de ce site sur un support électronique quel qu'il soit est formellement interdite sauf autorisation expresse du directeur de la publication.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-text-base mb-4">4. Crédits</h2>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li><strong>Conception et réalisation :</strong> Clément Balarot</li>
            <li><strong>Photos :</strong> Diab&Team 26-07</li>
            <li><strong>Icônes :</strong> Lucide React</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
