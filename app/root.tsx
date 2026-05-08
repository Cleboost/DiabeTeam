import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import "./app.css";

export function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div className="flex flex-col min-h-screen">
			<Header />
			<main className="flex-1 pt-20">{children}</main>
			<Footer />
		</div>
	);
}
