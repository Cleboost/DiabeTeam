import { Mail, MapPin, Phone } from "lucide-react";
import { SiFacebook, SiInstagram } from "react-icons/si";
import { Card } from "../components/Card";

export default function Contact() {
	return (
		<div className="container-responsive py-12 md:py-20">
			<div className="max-w-3xl mx-auto text-center mb-16">
				<h1 className="text-4xl md:text-5xl font-bold font-heading mb-6 text-primary">
					Contactez-nous
				</h1>
				<p className="text-lg text-gray-600">
					Une question sur l'association ? Besoin de soutien ou envie de devenir
					partenaire ? Notre équipe est à votre écoute.
				</p>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
				<Card className="p-8 text-center flex flex-col items-center">
					<div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
						<Mail size={24} />
					</div>
					<h3 className="text-xl font-bold mb-2">Email</h3>
					<p className="text-gray-600 mb-4">Pour toute demande générale</p>
					<a
						href="mailto:diabeteam2607@gmail.com"
						className="text-primary font-bold hover:underline"
					>
						diabeteam2607@gmail.com
					</a>
				</Card>

				<Card className="p-8 text-center flex flex-col items-center">
					<div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center text-yellow-600 mb-4">
						<Phone size={24} />
					</div>
					<h3 className="text-xl font-bold mb-2">Téléphone</h3>
					<p className="text-gray-600 mb-4">Du lundi au vendredi</p>
					<a
						href="tel:+33782120163"
						className="text-primary font-bold hover:underline"
					>
						07 82 12 01 63
					</a>
				</Card>

				<Card className="p-8 text-center flex flex-col items-center">
					<div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
						<MapPin size={24} />
					</div>
					<h3 className="text-xl font-bold mb-2">Zone d'action</h3>
					<p className="text-gray-600 mb-4">Drôme et Ardèche</p>
					<span className="text-primary font-bold">Valence & alentours</span>
				</Card>
			</div>

			<section className="bg-primary text-white rounded-3xl p-8 md:p-12 text-center">
				<h2 className="text-3xl font-bold mb-6">Suivez-nous sur les réseaux</h2>
				<p className="text-white/80 mb-10 max-w-xl mx-auto">
					C'est le meilleur moyen de rester informé de nos activités au
					quotidien et de découvrir la vie de l'association en images.
				</p>
				<div className="flex justify-center gap-6">
					<a
						href="https://www.facebook.com/profile.php?id=61558500357352"
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center gap-3 bg-white text-primary px-6 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors"
					>
						<SiFacebook size={24} />
						Facebook
					</a>
					<a
						href="https://www.instagram.com/diabeteam2607/"
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center gap-3 bg-white text-primary px-6 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors"
					>
						<SiInstagram size={24} />
						Instagram
					</a>
				</div>
			</section>
		</div>
	);
}
