import type { Route } from "./+types/galerie";
import { useState } from "react";
import { Card } from "../components/Card";
import { X, ZoomIn } from "lucide-react";
import gallery from "../data/gallery.json";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Galerie Photos - Diab&Team 26-07" },
    {
      name: "description",
      content:
        "Retrouvez en images les moments forts de la vie de l'association Diab&Team 26-07.",
    },
  ];
}

export default function Galerie() {
  const [selectedImage, setSelectedImage] = useState<typeof gallery[0] | null>(null);

  return (
    <div className="container-responsive py-12 md:py-20">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold font-heading mb-4 text-primary">
          Galerie Souvenirs
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Retour en images sur les moments de partage et de convivialité qui font vivre notre association.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {gallery.map((image) => (
          <div 
            key={image.id} 
            className="group relative aspect-video cursor-pointer overflow-hidden rounded-xl shadow-sm hover:shadow-lg transition-all"
            onClick={() => setSelectedImage(image)}
          >
            <img 
              src={image.url} 
              alt={image.title} 
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100 duration-300">
              <div className="text-white text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <ZoomIn size={32} className="mx-auto mb-2" />
                <h3 className="font-bold text-lg">{image.title}</h3>
                <span className="text-sm opacity-80">{image.year}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 transition-opacity duration-300 animate-in fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors bg-white/10 rounded-full p-2"
            onClick={() => setSelectedImage(null)}
          >
            <X size={32} />
          </button>
          
          <div 
            className="max-w-5xl max-h-[90vh] relative"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={selectedImage.url} 
              alt={selectedImage.title} 
              className="max-h-[80vh] w-auto rounded-lg shadow-2xl"
            />
            <div className="text-white mt-4 text-center">
              <h3 className="text-xl font-bold">{selectedImage.title}</h3>
              <p className="text-gray-400">{selectedImage.year}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
