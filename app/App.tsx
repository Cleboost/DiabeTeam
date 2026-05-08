import { Route, Router } from "./lib/router";
import { Layout } from "./root";
import Agenda from "./routes/agenda";
import Association from "./routes/association";
import Confidentialite from "./routes/confidentialite";
import Conseils from "./routes/conseils";
import Contact from "./routes/contact";
import Galerie from "./routes/galerie";
import Home from "./routes/home";
import MentionsLegales from "./routes/mentions-legales";
import NousSoutenir from "./routes/nous-soutenir";
import Qr from "./routes/qr";
import Sponsors from "./routes/sponsors";

export default function App() {
	return (
		<Router>
			<Layout>
				<Route path="/" component={Home} />
				<Route path="/association" component={Association} />
				<Route path="/conseils" component={Conseils} />
				<Route path="/sponsors" component={Sponsors} />
				<Route path="/galerie" component={Galerie} />
				<Route path="/agenda" component={Agenda} />
				<Route path="/contact" component={Contact} />
				<Route path="/mentions-legales" component={MentionsLegales} />
				<Route path="/confidentialite" component={Confidentialite} />
				<Route path="/nous-soutenir" component={NousSoutenir} />
				<Route path="/qr" component={Qr} />
			</Layout>
		</Router>
	);
}
