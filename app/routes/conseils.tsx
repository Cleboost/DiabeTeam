import { BookOpen, ExternalLink, Lightbulb } from "lucide-react";
import { Card } from "../components/Card";

export default function Conseils() {
	const resources = [
		{
			title: "AJD (Aide aux Jeunes Diabétiques)",
			description:
				"La référence en France pour le diabète de type 1 chez l'enfant et l'adolescent. Informations médicales, juridiques et sociales.",
			url: "https://www.ajd-diabete.fr/",
			category: "Incontournable",
		},
		{
			title: "Diabète LAB",
			description:
				"Le living lab de la Fédération Française des Diabétiques pour comprendre le vécu des patients.",
			url: "https://diabetelab.federationdesdiabetiques.org/",
			category: "Recherche",
		},
		{
			title: "Type 1 Family",
			description:
				"Une plateforme d'échange et de partage pour les familles touchées par le DT1.",
			url: "https://type1family.fr/",
			category: "Communauté",
		},
	];

	return (
		<div className="container-responsive py-12 md:py-20">
			<div className="max-w-3xl mb-16">
				<h1 className="text-4xl font-bold font-heading mb-6 text-primary">
					Conseils & Ressources
				</h1>
				<p className="text-lg text-gray-600">
					Vivre avec le diabète de type 1 demande une adaptation constante.
					Retrouvez ici des ressources sélectionnées pour vous accompagner dans
					votre quotidien.
				</p>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
				<Card className="p-8 border-t-4 border-t-primary">
					<Lightbulb className="text-primary mb-4" size={32} />
					<h3 className="text-xl font-bold mb-3">L'école et le PAI</h3>
					<p className="text-gray-600 mb-4">
						Le Projet d'Accueil Individualisé (PAI) est essentiel pour la
						sécurité de l'enfant à l'école. N'hésitez pas à nous solliciter pour
						échanger sur sa mise en place.
					</p>
				</Card>

				<Card className="p-8 border-t-4 border-t-accent">
					<BookOpen className="text-accent mb-4" size={32} />
					<h3 className="text-xl font-bold mb-3">Activités Sportives</h3>
					<p className="text-gray-600 mb-4">
						Le sport est recommandé ! Il demande cependant une gestion fine de
						la glycémie. Anticiper et tester sont les maîtres mots.
					</p>
				</Card>

				<Card className="p-8 border-t-4 border-t-primary">
					<div className="flex items-center gap-2 text-primary mb-4 font-bold">
						<span className="text-2xl">?</span>
					</div>
					<h3 className="text-xl font-bold mb-3">Nouveaux diagnostiqués</h3>
					<p className="text-gray-600 mb-4">
						Le choc de l'annonce est normal. Prenez le temps, étape par étape.
						L'association est là pour vous écouter, sans jugement.
					</p>
				</Card>
			</div>

			<section className="bg-bg-alt rounded-3xl p-8 md:p-12">
				<h2 className="text-2xl font-bold mb-8 text-center">
					Liens utiles et partenaires nationaux
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{resources.map((res) => (
						<a
							key={res.url}
							href={res.url}
							target="_blank"
							rel="noopener noreferrer"
							className="group"
						>
							<Card className="p-6 h-full transition-all group-hover:border-primary group-hover:shadow-md">
								<div className="text-xs font-bold text-primary uppercase tracking-wider mb-2">
									{res.category}
								</div>
								<h4 className="text-lg font-bold mb-2 flex items-center justify-between">
									{res.title}
									<ExternalLink
										size={16}
										className="opacity-0 group-hover:opacity-100 transition-opacity"
									/>
								</h4>
								<p className="text-sm text-gray-600">{res.description}</p>
							</Card>
						</a>
					))}
				</div>
			</section>
		</div>
	);
}
