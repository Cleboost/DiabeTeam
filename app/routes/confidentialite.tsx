import type { Route } from "./+types/confidentialite";

export function meta(_args: Route.MetaArgs) {
	return [
		{ title: "Politique de Confidentialité - Diab&Team 26-07" },
		{
			name: "description",
			content:
				"Politique de confidentialité et gestion des données personnelles.",
		},
	];
}

export default function Confidentialite() {
	return (
		<div className="container-responsive py-12 md:py-20">
			<h1 className="text-3xl font-bold font-heading mb-8 text-primary">
				Politique de Confidentialité
			</h1>

			<div className="prose prose-gray max-w-none space-y-8">
				<section>
					<h2 className="text-xl font-bold text-text-base mb-4">
						1. Collecte des données
					</h2>
					<p>
						Ce site est un site vitrine informatif.{" "}
						<strong>
							Nous ne collectons aucune donnée personnelle directement sur ce
							site
						</strong>{" "}
						(pas de formulaire de contact, pas de compte utilisateur).
					</p>
					<p className="mt-2">
						Les seules données personnelles collectées le sont via notre
						partenaire <strong>HelloAsso</strong> lors des adhésions ou dons, et
						sont gérées directement par leur plateforme sécurisée.
					</p>
				</section>

				<section>
					<h2 className="text-xl font-bold text-text-base mb-4">
						2. Utilisation des données
					</h2>
					<p>
						Puisque nous ne collectons aucune donnée sur ce site, nous n'en
						stockons et n'en traitons aucune.
					</p>
					<p className="mt-2">
						Les communications se font uniquement par email volontaire de votre
						part ou via HelloAsso.
					</p>
				</section>

				<section>
					<h2 className="text-xl font-bold text-text-base mb-4">3. Cookies</h2>
					<p>
						Ce site n'utilise{" "}
						<strong>aucun cookie publicitaire ou de traçage</strong>.
					</p>
					<p className="mt-2">
						Seuls des cookies strictement techniques et essentiels au
						fonctionnement de l'application (liés à la technologie React Router)
						peuvent être déposés temporairement sur votre navigateur pour
						assurer la navigation, sans collecter d'information personnelle.
					</p>
				</section>

				<section>
					<h2 className="text-xl font-bold text-text-base mb-4">
						4. Vos droits
					</h2>
					<p>
						Comme nous ne stockons aucune donnée personnelle via ce site, nous
						n'avons aucune information à supprimer ou modifier vous concernant
						sur nos serveurs.
					</p>
					<p className="mt-2">
						Pour les données liées à vos adhésions ou dons, celles-ci sont
						gérées par <strong>HelloAsso</strong>. Nous vous invitons à
						consulter leur politique de confidentialité ou à les contacter
						directement pour exercer vos droits.
					</p>
					<p className="mt-2">
						Si vous avez communiqué avec nous par email, vous pouvez simplement
						nous demander la suppression de nos échanges à tout moment à :{" "}
						<a
							href="mailto:diabeteam2607@gmail.com"
							className="text-primary underline"
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
