import fs from "node:fs";
import path from "node:path";

const PUBLIC_DIR = path.join(process.cwd(), "public");
const GALLERY_DIR = path.join(PUBLIC_DIR, "gallery");
const OUTPUT_FILE = path.join(process.cwd(), "app/data/gallery-events.json");

export interface GalleryEvent {
	id: string;
	title: string;
	year: string;
	cover: string;
	images: string[];
	isFolder: boolean;
}

function getGalleryEvents(): GalleryEvent[] {
	if (!fs.existsSync(GALLERY_DIR)) {
		console.log("Gallery directory not found:", GALLERY_DIR);
		return [];
	}

	const entries = fs.readdirSync(GALLERY_DIR, { withFileTypes: true });
	const events: GalleryEvent[] = [];

	for (const entry of entries) {
		if (entry.name.startsWith(".")) continue;

		if (entry.isDirectory()) {
			const dirPath = path.join(GALLERY_DIR, entry.name);
			const files = fs.readdirSync(dirPath);
			const images = files
				.filter((file) => /\.(jpg|jpeg|png|webp|gif)$/i.test(file))
				.map((file) => `/gallery/${entry.name}/${file}`);

			if (images.length > 0) {
				const titleParts = entry.name.split("_");
				// Check if first part is a year (4 digits)
				const possibleYear = titleParts[0];
				const isYear = /^\d{4}$/.test(possibleYear);
				const year = isYear
					? possibleYear
					: new Date().getFullYear().toString();

				// Remove year from title parts if present
				const titleWords = isYear ? titleParts.slice(1) : titleParts;
				const title = titleWords
					.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
					.join(" ");

				events.push({
					id: entry.name,
					title,
					year,
					cover: images[0],
					images,
					isFolder: true,
				});
			}
		} else if (
			entry.isFile() &&
			/\.(jpg|jpeg|png|webp|gif)$/i.test(entry.name)
		) {
			// It's a single image file
			const nameWithoutExt = path.parse(entry.name).name;
			const titleParts = nameWithoutExt.split("_");

			const possibleYear = titleParts[0];
			const isYear = /^\d{4}$/.test(possibleYear);
			const year = isYear ? possibleYear : new Date().getFullYear().toString();

			const titleWords = isYear ? titleParts.slice(1) : titleParts;
			const title = titleWords
				.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
				.join(" ");

			const url = `/gallery/${entry.name}`;
			events.push({
				id: nameWithoutExt,
				title,
				year,
				cover: url,
				images: [url],
				isFolder: false,
			});
		}
	}

	// Sort by year descending
	return events.sort((a, b) => Number(b.year) - Number(a.year));
}

const events = getGalleryEvents();
fs.writeFileSync(OUTPUT_FILE, JSON.stringify(events, null, 2));
console.log(
	`Generated gallery manifest with ${events.length} events at ${OUTPUT_FILE}`,
);
