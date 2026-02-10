import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
	index("routes/home.tsx"),
	route("association", "routes/association.tsx"),
	route("conseils", "routes/conseils.tsx"),
	route("sponsors", "routes/sponsors.tsx"),
	route("galerie", "routes/galerie.tsx"),
	route("agenda", "routes/agenda.tsx"),
	route("contact", "routes/contact.tsx"),
	route("mentions-legales", "routes/mentions-legales.tsx"),
	route("confidentialite", "routes/confidentialite.tsx"),
	route("nous-soutenir", "routes/nous-soutenir.tsx"),
	route("qr", "routes/qr.tsx"),
] satisfies RouteConfig;
