export default function Confidentialite() {
	return (
		<div className="container-responsive py-12 md:py-20 max-w-4xl">
			<h1 className="text-4xl font-bold font-heading mb-8 text-primary">
				Politique de Confidentialité
			</h1>

			<div className="prose prose-blue max-w-none text-gray-600 space-y-6">
				<section>
					<h2 className="text-2xl font-bold text-text-base mb-4">
						1. Introduction
					</h2>
					<p>
						L'association Diab&Team 26-07 accorde une grande importance à la
						protection de vos données personnelles. Cette politique détaille
						comment nous collectons et traitons vos informations.
					</p>
				</section>

				<section>
					<h2 className="text-2xl font-bold text-text-base mb-4">
						2. Collecte des données
					</h2>
					<p>
						Nous collectons des données uniquement lorsque vous nous contactez
						par email, téléphone ou via nos réseaux sociaux, ou lorsque vous
						adhérez via la plateforme HelloAsso.
					</p>
					<p>Les données peuvent inclure :</p>
					<ul className="list-disc pl-6 space-y-2">
						<li>Nom et prénom</li>
						<li>Adresse email</li>
						<li>Numéro de téléphone</li>
						<li>Informations relatives à l'adhésion</li>
					</ul>
				</section>

				<section>
					<h2 className="text-2xl font-bold text-text-base mb-4">
						3. Utilisation des données
					</h2>
					<p>Vos données sont utilisées exclusivement pour :</p>
					<ul className="list-disc pl-6 space-y-2">
						<li>Répondre à vos demandes d'information</li>
						<li>
							Gérer votre adhésion et vous informer des activités de
							l'association
						</li>
						<li>
							Vous envoyer des informations administratives ou liées aux
							événements
						</li>
					</ul>
				</section>

				<section>
					<h2 className="text-2xl font-bold text-text-base mb-4">
						4. Conservation et Partage
					</h2>
					<p>
						Nous ne vendons, n'échangeons ni ne transférons vos données
						personnelles à des tiers. Vos données sont conservées pour la durée
						nécessaire à la réalisation des finalités pour lesquelles elles ont
						été collectées.
					</p>
				</section>

				<section>
					<h2 className="text-2xl font-bold text-text-base mb-4">
						5. Vos droits
					</h2>
					<p>
						Conformément au RGPD, vous disposez d'un droit d'accès, de
						rectification, de suppression et d'opposition au traitement de vos
						données. Pour exercer ces droits, contactez-nous à :{" "}
						<a
							href="mailto:diabeteam2607@gmail.com"
							className="text-primary hover:underline"
						>
							diabeteam2607@gmail.com
						</a>
						.
					</p>
				</section>
			</div>
		</div>
	);
}
