import { Link } from "react-router";
import { Facebook, Instagram, Heart, Mail, Phone } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-ui/50 pt-16 pb-8">
      <div className="container-responsive grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        {/* Brand */}
        <div className="col-span-1 md:col-span-2">
          <Link to="/" className="inline-block mb-4">
            <div className="flex items-center gap-2">
              <img 
                src="https://cdn.helloasso.com/img/logos/croppedimage-44d156c392764af985eb976a97c70844.png" 
                alt="Logo Diab&Team" 
                className="h-10 w-auto object-contain"
              />
              <div className="flex flex-col">
                <span className="font-heading font-bold text-xl text-primary leading-none">
                  Diab&Team
                </span>
                <span className="text-xs font-semibold text-gray-500">
                  Drôme-Ardèche
                </span>
              </div>
            </div>
          </Link>
          <p className="text-gray-600 mb-6 max-w-sm">
            Association des familles d'enfants diabétiques de type 1.
            Soutenir, échanger, sensibiliser et vivre pleinement.
            Affiliée à l'AJD.
          </p>
          <div className="flex gap-4">
            <a
              href="https://www.facebook.com/profile.php?id=61558500357352"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white rounded-full border border-gray-ui hover:border-primary hover:text-primary transition-colors text-gray-600"
              aria-label="Facebook"
            >
              <Facebook size={20} />
            </a>
            <a
              href="https://www.instagram.com/diabeteam2607/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white rounded-full border border-gray-ui hover:border-primary hover:text-primary transition-colors text-gray-600"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-heading font-semibold text-lg mb-4">Navigation</h3>
          <ul className="space-y-3">
            <li>
              <Link to="/association" className="text-gray-600 hover:text-primary transition-colors">
                L'Association
              </Link>
            </li>
            <li>
              <Link to="/agenda" className="text-gray-600 hover:text-primary transition-colors">
                Agenda
              </Link>
            </li>
            <li>
              <Link to="/conseils" className="text-gray-600 hover:text-primary transition-colors">
                Conseils & Ressources
              </Link>
            </li>
            <li>
              <Link to="/galerie" className="text-gray-600 hover:text-primary transition-colors">
                Galerie photos
              </Link>
            </li>
            <li>
              <Link to="/sponsors" className="text-gray-600 hover:text-primary transition-colors">
                Nos partenaires
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact/Legal */}
        <div>
          <h3 className="font-heading font-semibold text-lg mb-4">Informations</h3>
          <ul className="space-y-3">
            <li>
              <Link to="/contact" className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors">
                <Mail size={16} /> Contactez-nous
              </Link>
            </li>
            <li>
              <a href="tel:+33782120163" className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors">
                <Phone size={16} /> 07 82 12 01 63
              </a>
            </li>
            <li>
              <Link to="/mentions-legales" className="text-gray-600 hover:text-primary transition-colors">
                Mentions légales
              </Link>
            </li>
            <li>
              <Link to="/confidentialite" className="text-gray-600 hover:text-primary transition-colors">
                Politique de confidentialité
              </Link>
            </li>
            <li>
              <Link to="/nous-soutenir" className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors font-medium">
                <Heart size={16} className="text-red-500 fill-red-500" /> Faire un don
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="container-responsive pt-8 border-t border-gray-ui/50 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
        <p>© {currentYear} Diab&Team 26-07. Tous droits réservés.</p>
        <p className="flex items-center gap-1">
          Fait avec <Heart size={12} className="text-red-500 fill-red-500" /> par <a href="https://github.com/cleboost" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors underline decoration-dotted underline-offset-2">Clément Balarot</a>
        </p>
      </div>
    </footer>
  );
}
