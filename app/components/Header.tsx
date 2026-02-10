import { Link, useLocation } from "react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "./Button";
import { cn } from "../lib/utils";

const NAV_ITEMS = [
  { label: "Accueil", href: "/" },
  { label: "L'Association", href: "/association" },
  { label: "Conseils", href: "/conseils" },
  { label: "Sponsors", href: "/sponsors" },
  { label: "Agenda", href: "/agenda" },
  { label: "Galerie", href: "/galerie" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-ui/50">
      <div className="container-responsive h-20 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <img 
            src="https://cdn.helloasso.com/img/logos/croppedimage-44d156c392764af985eb976a97c70844.png" 
            alt="Logo Diab&Team" 
            className="h-12 w-auto object-contain"
          />
          <div className="flex flex-col">
            <span className="font-heading font-bold text-xl text-primary group-hover:text-primary/90 transition-colors leading-none">
              Diab&Team
            </span>
            <span className="text-xs font-semibold text-gray-500">
              26-07
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                location.pathname === item.href
                  ? "text-primary font-semibold"
                  : "text-text-base"
              )}
            >
              {item.label}
            </Link>
          ))}
          <Button
            variant="accent"
            size="sm"
            to="https://www.helloasso.com/associations/diabeteam-26-07-association-des-familles-de-l-ajd-drome-ardeche"
          >
            Nous soutenir
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="md:hidden p-2 text-text-base hover:bg-gray-ui/20 rounded-lg transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 right-0 bg-white border-b border-gray-ui/50 shadow-lg p-4 flex flex-col gap-4 animate-in slide-in-from-top-2">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={cn(
                "px-4 py-2 rounded-lg text-base font-medium transition-colors hover:bg-gray-ui/20",
                location.pathname === item.href
                  ? "text-primary bg-primary/5"
                  : "text-text-base"
              )}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <div className="pt-2 border-t border-gray-ui/20">
            <Button
              variant="accent"
              className="w-full justify-center"
              to="https://www.helloasso.com/associations/diabeteam-26-07-association-des-familles-de-l-ajd-drome-ardeche"
            >
              Nous soutenir
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
