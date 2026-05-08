import { Router, Route } from "./lib/router";
import { Layout } from "./root";
import Home from "./routes/home";
import Association from "./routes/association";
import Conseils from "./routes/conseils";
import Sponsors from "./routes/sponsors";
import Galerie from "./routes/galerie";
import Agenda from "./routes/agenda";
import Contact from "./routes/contact";
import MentionsLegales from "./routes/mentions-legales";
import Confidentialite from "./routes/confidentialite";
import NousSoutenir from "./routes/nous-soutenir";
import Qr from "./routes/qr";

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
