/**
 * Resolves a path for a static asset in the public directory,
 * taking into account the Vite base URL (e.g. for previews).
 *
 * @param path The absolute path to the asset (e.g. "/gallery/image.jpg")
 * @returns The resolved path including the base URL
 */
export function resolveAsset(path: string): string {
	const baseUrl = import.meta.env.BASE_URL;
	if (baseUrl === "/") return path;
	const cleanPath = path.startsWith("/") ? path.slice(1) : path;

	return `${baseUrl}${cleanPath}`;
}
