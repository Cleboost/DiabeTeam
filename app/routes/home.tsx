import { ArrowRight, Calendar, Heart, MapPin, Users } from "lucide-react";
import { Button } from "../components/Button";
import { Card } from "../components/Card";
import events from "../data/events.json"; // Assuming json import is configured or works in Bun/Vite
import sponsors from "../data/sponsors.json";
import type { Route } from "./+types/home";

export function meta(_args: Route.MetaArgs) {
	return [
		{ title: "Diab&Team 26-07 - Association des familles DT1 Drôme Ardèche" },
		{
			name: "description",
			content:
				"Soutenir les familles d'enfants diabétiques de type 1, créer du lien, organiser des événements et sensibiliser. Rejoignez la communauté Diab&Team !",
		},
	];
}

export default function Home() {
	const nextEvents = events.slice(0, 3);
	const featuredSponsors = sponsors.slice(0, 4);

	return (
		<div className="flex flex-col min-h-screen">
			{/* Hero Section */}
			<section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-white to-accent/5 pt-16 pb-20 md:pt-32 md:pb-28">
				<div className="container-responsive relative z-10">
					<div className="max-w-3xl mx-auto text-center">
						<h1 className="text-4xl md:text-6xl font-extrabold text-primary mb-6 leading-tight">
							Diab&Team <span className="text-accent">26-07</span>
						</h1>
						<p className="text-xl md:text-2xl text-gray-600 mb-8 font-light">
							Association des familles – AJD Drôme Ardèche
							<br className="hidden md:block" />
							<span className="text-primary font-medium">
								Soutenir, échanger, vivre.
							</span>
						</p>
						<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
							<Button size="lg" to="/association">
								Découvrir l'association
							</Button>
							<Button
								variant="secondary"
								size="lg"
								to="https://www.helloasso.com/associations/diabeteam-26-07-association-des-familles-de-l-ajd-drome-ardeche"
							>
								Adhérer sur HelloAsso <ArrowRight className="ml-2 w-5 h-5" />
							</Button>
						</div>
					</div>
				</div>

				{/* Decorative background element - abstract smiley arc */}
				<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-3xl -z-0" />
			</section>

			{/* Mission Section */}
			<section className="py-16 md:py-24 bg-white">
				<div className="container-responsive">
					<div className="text-center mb-16">
						<h2 className="text-3xl font-bold text-text-base mb-4">
							Notre mission
						</h2>
						<p className="text-gray-600 max-w-2xl mx-auto">
							Nous accompagnons les familles touchées par le diabète de type 1
							au quotidien à travers trois piliers essentiels.
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						<Card className="p-8 hover:shadow-md transition-shadow">
							<div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6">
								<Users size={28} />
							</div>
							<h3 className="text-xl font-bold mb-3">Échanges & Rencontres</h3>
							<p className="text-gray-600">
								Rompre l'isolement en organisant des moments conviviaux pour les
								parents et les enfants. Partager nos expériences et nos astuces.
							</p>
						</Card>

						<Card className="p-8 hover:shadow-md transition-shadow">
							<div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center text-yellow-600 mb-6">
								<Heart size={28} />
							</div>
							<h3 className="text-xl font-bold mb-3">Soutien au quotidien</h3>
							<p className="text-gray-600">
								Être présent dans les moments difficiles (découverte, école,
								adolescence) et faciliter la vie avec le DT1.
							</p>
						</Card>

						<Card className="p-8 hover:shadow-md transition-shadow">
							<div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6">
								<Calendar size={28} />
							</div>
							<h3 className="text-xl font-bold mb-3">Sensibilisation</h3>
							<p className="text-gray-600">
								Informer le grand public et les structures pour mieux accueillir
								et comprendre le diabète de type 1.
							</p>
						</Card>
					</div>
				</div>
			</section>

			{/* Events Section */}
			<section className="py-16 md:py-24 bg-bg-alt">
				<div className="container-responsive">
					<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
						<div>
							<h2 className="text-3xl font-bold text-text-base mb-2">
								Prochains événements
							</h2>
							<p className="text-gray-600">
								Ne manquez pas nos prochains rendez-vous !
							</p>
						</div>
						<Button variant="secondary" to="/agenda">
							Voir tout l'agenda
						</Button>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
						{nextEvents.map((event) => (
							<Card
								key={event.id}
								className="flex flex-col h-full hover:shadow-md transition-all hover:-translate-y-1 duration-300"
							>
								<div className="h-2 bg-gradient-to-r from-primary to-accent" />
								<div className="p-6 flex flex-col h-full">
									<div className="text-sm font-semibold text-primary mb-2 uppercase tracking-wide">
										{new Date(event.date).toLocaleDateString("fr-FR", {
											day: "numeric",
											month: "long",
											year: "numeric",
										})}
									</div>
									<h3 className="text-xl font-bold mb-3">{event.title}</h3>
									<p className="text-gray-600 mb-6 flex-grow">
										{event.description}
									</p>
									{event.location && (
										<div className="text-sm text-gray-500 font-medium flex items-center gap-1">
											<MapPin size={16} className="text-primary shrink-0" />
											<span>{event.location}</span>
										</div>
									)}
								</div>
							</Card>
						))}
					</div>
				</div>
			</section>

			{/* Sponsors Section */}
			<section className="py-16 bg-white border-t border-gray-ui/30">
				<div className="container-responsive text-center">
					<h2 className="text-2xl font-bold text-gray-400 mb-8 uppercase tracking-widest text-sm">
						Ils nous soutiennent
					</h2>
					<div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
						{featuredSponsors.map((sponsor) => (
							<img
								key={sponsor.id}
								src={sponsor.logo}
								alt={sponsor.name}
								className="h-12 md:h-16 object-contain"
							/>
						))}
					</div>
					<div className="mt-12">
						<Button variant="ghost" to="/sponsors">
							Devenir partenaire
						</Button>
					</div>
				</div>
			</section>

			{/* CTA / Follow Us */}
			<section className="py-20 bg-primary text-white text-center">
				<div className="container-responsive">
					<h2 className="text-3xl md:text-4xl font-bold mb-6">
						Envie de nous rejoindre ?
					</h2>
					<p className="text-white/90 text-lg max-w-2xl mx-auto mb-10">
						Que vous soyez une famille concernée ou un sympathisant, votre
						soutien est précieux pour faire avancer nos actions.
					</p>
					<div className="flex flex-col sm:flex-row justify-center gap-4">
						<Button
							variant="accent"
							size="lg"
							to="https://www.helloasso.com/associations/diabeteam-26-07-association-des-familles-de-l-ajd-drome-ardeche"
						>
							Adhérer maintenant
						</Button>
						<Button
							variant="secondary"
							className="border-white text-white hover:bg-white/10"
							size="lg"
							to="/contact"
						>
							Nous contacter
						</Button>
					</div>
				</div>
			</section>
		</div>
	);
}
