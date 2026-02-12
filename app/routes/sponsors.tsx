import { Button } from "../components/Button";
import { Card } from "../components/Card";
import sponsors from "../data/sponsors.json";

export function meta() {
	return [
		{ title: "Nos Sponsors - Diab&Team 26-07" },
		{
			name: "description",
			content:
				"Découvrez les partenaires qui soutiennent les actions de Diab&Team 26-07.",
		},
	];
}

export default function Sponsors() {
	return (
		<div className="container-responsive py-12 md:py-20">
			<div className="text-center mb-16">
				<h1 className="text-4xl font-bold font-heading mb-4 text-primary">
					Nos Partenaires
				</h1>
				<p className="text-gray-600 max-w-2xl mx-auto">
					Un immense merci à nos sponsors et partenaires qui nous permettent de
					réaliser nos projets et d'améliorer le quotidien des familles.
				</p>
			</div>

			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-20">
				{sponsors.map((sponsor) => (
					<Card
						key={sponsor.id}
						className="p-8 flex flex-col items-center justify-center gap-4 hover:shadow-lg transition-all group"
					>
						<div className="h-32 w-full flex items-center justify-center p-4 bg-gray-50 rounded-xl group-hover:bg-white transition-colors">
							<img
								src={sponsor.logo}
								alt={sponsor.name}
								className="max-h-full max-w-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
							/>
						</div>
						<div className="text-center">
							<h3 className="font-bold text-lg truncate w-full">
								{sponsor.name}
							</h3>
							{sponsor.website && (
								<a
									href={sponsor.website}
									target="_blank"
									rel="noopener noreferrer"
									className="text-sm text-primary hover:underline mt-1 inline-block"
								>
									Visiter le site
								</a>
							)}
						</div>
					</Card>
				))}
			</div>

			<div className="bg-primary text-white rounded-3xl p-8 md:p-16 text-center relative overflow-hidden">
				<div className="relative z-10">
					<h2 className="text-3xl font-bold mb-6">Devenir partenaire</h2>
					<p className="text-white/90 max-w-2xl mx-auto mb-8 text-lg">
						Vous souhaitez soutenir une cause locale et donner de la visibilité
						à votre entreprise auprès des familles de Drôme-Ardèche ?
					</p>
					<div className="flex flex-col sm:flex-row justify-center gap-4">
						<Button variant="accent" size="lg" to="/contact">
							Contactez-nous
						</Button>
						<Button
							variant="secondary"
							className="border-white text-white hover:bg-white/10"
							size="lg"
							to="/doc/dossier-partenariat.pdf" // Placeholder path
						>
							Télécharger le dossier
						</Button>
					</div>
				</div>
				<div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
				<div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/20 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />
			</div>
		</div>
	);
}
