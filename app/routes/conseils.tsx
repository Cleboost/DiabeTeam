import {
	ExternalLink,
	Heart,
	Info,
	Lightbulb,
	ShieldAlert,
} from "lucide-react";
import { Button } from "../components/Button";
import { Card } from "../components/Card";
import type { Route } from "./+types/conseils";

export function meta(_args: Route.MetaArgs) {
	return [
		{ title: "Conseils & Ressources - Diab&Team 26-07" },
		{
			name: "description",
			content:
				"Quelques conseils et ressources pour les familles qui découvrent le diabète de type 1 chez un enfant.",
		},
	];
}

export default function Conseils() {
	return (
		<div className="container-responsive py-12 md:py-20">
			<div className="max-w-4xl mx-auto">
				<div className="text-center mb-16">
					<h1 className="text-4xl font-bold font-heading mb-4 text-primary">
						Le diabète vient d'arriver ?
					</h1>
					<p className="text-xl text-gray-600">
						Vous n'êtes pas seuls. Voici quelques premières pistes pour vous
						aider à y voir plus clair.
					</p>
				</div>

				<div className="space-y-12">
					{/* First Steps Section */}
					<section>
						<div className="flex items-center gap-3 mb-6">
							<div className="bg-primary/20 p-2 rounded-lg text-primary">
								<ShieldAlert size={28} />
							</div>
							<h2 className="text-2xl font-bold text-text-base">
								Les premiers jours
							</h2>
						</div>

						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							<Card className="p-6">
								<h3 className="font-bold text-lg mb-2 flex items-center gap-2">
									<Heart className="text-red-500" size={20} />
									Soufflez, c'est un marathon
								</h3>
								<p className="text-gray-600">
									L'annonce est un choc. Il est normal de se sentir dépassé. Ne
									cherchez pas à tout maîtriser en 24h. L'apprentissage se fait
									étape par étape, avec l'équipe médicale.
								</p>
							</Card>

							<Card className="p-6">
								<h3 className="font-bold text-lg mb-2 flex items-center gap-2">
									<Info className="text-blue-500" size={20} />
									Faites confiance aux pros
								</h3>
								<p className="text-gray-600">
									L'éducation thérapeutique à l'hôpital est la base. Notez
									toutes vos questions pour les poser aux infirmières et
									diabétologues.
								</p>
							</Card>
						</div>
					</section>

					{/* Practical Tips Section */}
					<section>
						<div className="flex items-center gap-3 mb-6">
							<div className="bg-accent/20 p-2 rounded-lg text-yellow-700">
								<Lightbulb size={28} />
							</div>
							<h2 className="text-2xl font-bold text-text-base">
								Astuces pratiques
							</h2>
						</div>

						<div className="space-y-4">
							<div className="flex gap-4 p-4 rounded-xl bg-bg-alt border border-gray-ui/50">
								<div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center shrink-0 font-bold">
									1
								</div>
								<div>
									<h4 className="font-bold mb-1">Le kit de secours</h4>
									<p className="text-gray-600">
										Toujours avoir du sucre (jus, morceaux de sucre) et de l'eau
										sur soi. Préparez un petit sac qui suit votre enfant
										partout.
									</p>
								</div>
							</div>

							<div className="flex gap-4 p-4 rounded-xl bg-bg-alt border border-gray-ui/50">
								<div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center shrink-0 font-bold">
									2
								</div>
								<div>
									<h4 className="font-bold mb-1">L'école et le PAI</h4>
									<p className="text-gray-600">
										Le Projet d'Accueil Individualisé (PAI) est indispensable.
										Il permet d'organiser les soins à l'école. Nous pouvons vous
										aider à en discuter avec les enseignants.
									</p>
								</div>
							</div>

							<div className="flex gap-4 p-4 rounded-xl bg-bg-alt border border-gray-ui/50">
								<div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center shrink-0 font-bold">
									3
								</div>
								<div>
									<h4 className="font-bold mb-1">Simplifiez-vous la vie</h4>
									<p className="text-gray-600">
										Applis de calcul de glucides, lecteurs de glycémie en
										continu... La technologie aide énormément aujourd'hui.
										Explorez-la dès que vous vous sentez prêts.
									</p>
								</div>
							</div>
						</div>
					</section>

					{/* External Resources */}
					<section className="bg-primary/5 p-8 rounded-3xl border border-primary/10">
						<h2 className="text-2xl font-bold text-primary mb-6">
							Liens et ressources utiles
						</h2>
						<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
							<a
								href="https://www.ajd-diabete.fr/"
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center justify-between p-4 bg-white rounded-xl border border-gray-ui hover:border-primary hover:shadow-sm transition-all group"
							>
								<span className="font-medium">Site national de l'AJD</span>
								<ExternalLink
									size={18}
									className="text-gray-400 group-hover:text-primary"
								/>
							</a>
							<a
								href="https://www.ffdiabete.org/"
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center justify-between p-4 bg-white rounded-xl border border-gray-ui hover:border-primary hover:shadow-sm transition-all group"
							>
								<span className="font-medium">Fédération Française</span>
								<ExternalLink
									size={18}
									className="text-gray-400 group-hover:text-primary"
								/>
							</a>
						</div>
					</section>

					{/* Final Message */}
					<div className="text-center pt-8">
						<h3 className="text-2xl font-bold mb-4 italic">
							"Le diabète n'empêche rien, il demande juste de l'organisation."
						</h3>
						<p className="text-gray-600 mb-8">
							Besoin de parler à d'autres parents qui sont passés par là ? Nos
							bénévoles sont là pour vous écouter et partager leur vécu.
						</p>
						<Button size="lg" to="/contact">
							Nous contacter pour échanger
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
}
