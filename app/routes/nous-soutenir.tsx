import { redirect } from "react-router";

export function clientLoader() {
	// Redirect directly to HelloAsso page for now as MVP
	return redirect(
		"https://www.helloasso.com/associations/diabeteam-26-07-association-des-familles-de-l-ajd-drome-ardeche",
	);
}

export default function NousSoutenir() {
	return null;
}
