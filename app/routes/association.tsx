import { Button } from "../components/Button";

export function meta() {
	return [
		{ title: "L'Association - Diab&Team 26-07" },
		{
			name: "description",
			content:
				"Découvrez Diab&Team 26-07, l'association des familles d'enfants diabétiques de type 1 en Drôme et Ardèche.",
		},
	];
}

export default function Association() {
	return (
		<div className="container-responsive py-12 md:py-20">
			<div className="max-w-4xl mx-auto">
				<h1 className="text-4xl font-bold font-heading mb-8 text-primary">
					Qui sommes-nous ?
				</h1>

				<div className="prose prose-lg text-gray-600 mb-12">
					<p className="text-xl leading-relaxed mb-6">
						<strong>Diab&Team 26-07</strong> est une association locale, loi
						1901, créée par des parents pour des parents. Nous sommes affiliés à
						l'<strong>Aide aux Jeunes Diabétiques (AJD)</strong> et rayonnons
						sur les départements de la Drôme et de l'Ardèche, principalement
						autour de Valence.
					</p>

					<h2 className="text-2xl font-bold text-text-base mt-10 mb-4">
						Notre histoire
					</h2>
					<p>
						L'association est née d'un constat simple : l'annonce du diabète de
						type 1 chez un enfant est un bouleversement pour toute la famille.
						Il manquait un espace de parole et de rencontre local pour partager
						ce quotidien si particulier.
					</p>

					<h2 className="text-2xl font-bold text-text-base mt-10 mb-4">
						Nos objectifs
					</h2>
					<ul className="list-disc pl-6 space-y-2">
						<li>
							<strong>Accompagner :</strong> Être présent dès le diagnostic et
							tout au long du parcours (école, adolescence, vie d'adulte).
						</li>
						<li>
							<strong>Fédérer :</strong> Créer du lien entre les familles pour
							ne plus jamais se sentir seul face à la maladie.
						</li>
						<li>
							<strong>Divertir :</strong> Organiser des sorties (sportives,
							culturelles, ludiques) où le diabète n'est pas le sujet principal,
							mais où il est géré ensemble, naturellement.
						</li>
					</ul>

					<h2 className="text-2xl font-bold text-text-base mt-10 mb-4">
						Zone d'intervention
					</h2>
					<p>
						Nos actions se concentrent sur le bassin de{" "}
						<strong>Valence (26)</strong> et s'étendent à toute la{" "}
						<strong>Drôme</strong> et l'<strong>Ardèche</strong>. Nous
						travaillons en lien étroit avec les équipes pédiatriques
						hospitalières locales.
					</p>
				</div>

				<div className="bg-bg-alt p-8 rounded-2xl border border-gray-ui text-center">
					<h3 className="text-2xl font-bold mb-4">Rejoignez l'aventure !</h3>
					<p className="mb-8 text-gray-600">
						Adhérer, c'est soutenir nos actions, mais c'est surtout rejoindre
						une grande famille solidaire.
					</p>
					<Button
						size="lg"
						to="https://www.helloasso.com/associations/diabeteam-26-07-association-des-familles-de-l-ajd-drome-ardeche"
					>
						Adhérer à l'association
					</Button>
				</div>
			</div>
		</div>
	);
}
