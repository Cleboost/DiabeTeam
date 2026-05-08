import { useEffect } from "react";
import { useRouter } from "../lib/router";

export default function QR() {
	const { navigate } = useRouter();
	useEffect(() => {
		navigate("/nous-soutenir");
	}, [navigate]);
	return null;
}
