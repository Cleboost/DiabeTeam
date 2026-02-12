import { useState, useEffect, useCallback } from "react";
import { X, ZoomIn, ChevronLeft, ChevronRight, Image as ImageIcon } from "lucide-react";
import galleryData from "../data/gallery-events.json";

export function meta() {
	return [
		{ title: "Galerie Photos - Diab&Team 26-07" },
		{
			name: "description",
			content:
				"Retrouvez en images les moments forts de la vie de l'association Diab&Team 26-07.",
		},
	];
}

export default function Galerie() {
	const events = galleryData;
	const [selectedEvent, setSelectedEvent] = useState<(typeof events)[0] | null>(
		null,
	);
	const [focusedImageIndex, setFocusedImageIndex] = useState<number | null>(
		null,
	);

	const handleEventClick = (event: (typeof events)[0]) => {
		setSelectedEvent(event);
		setFocusedImageIndex(null);
	};

	const closeEvent = useCallback(() => {
		setSelectedEvent(null);
		setFocusedImageIndex(null);
	}, []);

	const openImage = (index: number) => {
		setFocusedImageIndex(index);
	};

	// Keyboard navigation
	useEffect(() => {
		if (!selectedEvent) return;

		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === "Escape") {
				if (focusedImageIndex !== null) {
					setFocusedImageIndex(null);
				} else {
					closeEvent();
				}
			}

			if (focusedImageIndex !== null) {
				if (e.key === "ArrowRight") {
					setFocusedImageIndex((prev) => {
						if (prev === null) return 0;
						return prev < selectedEvent.images.length - 1 ? prev + 1 : 0;
					});
				}
				if (e.key === "ArrowLeft") {
					setFocusedImageIndex((prev) => {
						if (prev === null) return 0;
						return prev > 0 ? prev - 1 : selectedEvent.images.length - 1;
					});
				}
			}
		};

		window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
	}, [selectedEvent, focusedImageIndex, closeEvent]);

	const navigateImage = (direction: "next" | "prev", e: React.MouseEvent) => {
		e.stopPropagation();
		if (!selectedEvent || focusedImageIndex === null) return;

		if (direction === "next") {
			setFocusedImageIndex(
				focusedImageIndex < selectedEvent.images.length - 1
					? focusedImageIndex + 1
					: 0,
			);
		} else {
			setFocusedImageIndex(
				focusedImageIndex > 0
					? focusedImageIndex - 1
					: selectedEvent.images.length - 1,
			);
		}
	};

	return (
		<div className="container-responsive py-12 md:py-20 min-h-screen">
			<div className="text-center mb-16">
				<h1 className="text-4xl font-bold font-heading mb-4 text-primary">
					Galerie Souvenirs
				</h1>
				<p className="text-gray-600 max-w-2xl mx-auto">
					Retour en images sur les moments de partage et de convivialité qui
					font vivre notre association.
				</p>
			</div>

			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
				{events.map((event) => (
					<EventCard
						key={event.id}
						event={event}
						onClick={() => handleEventClick(event)}
					/>
				))}
			</div>

			{/* Event Modal (Grid of photos) */}
			{selectedEvent && focusedImageIndex === null && (
				// biome-ignore lint/a11y/useKeyWithClickEvents: Handled globally via useEffect
				<div
					className="fixed inset-0 z-50 flex flex-col bg-white/95 backdrop-blur-sm animate-in fade-in duration-200"
					onClick={(e) => {
						// Close if clicking the backdrop (not inner content)
						if (e.target === e.currentTarget) closeEvent();
					}}
					role="dialog"
					aria-modal="true"
				>
					{/* Header */}
					<div className="flex items-center justify-between p-4 border-b border-gray-100 bg-white/50 backdrop-blur shadow-sm z-10 shrink-0">
						<div className="px-4">
							<h2 className="text-xl font-bold text-gray-900">
								{selectedEvent.title}
							</h2>
							<p className="text-sm text-gray-500">
								{selectedEvent.year} • {selectedEvent.images.length} photos
							</p>
						</div>
						<button
							type="button"
							className="p-2 hover:bg-gray-100 rounded-full transition-colors cursor-pointer"
							onClick={closeEvent}
						>
							<X size={28} className="text-gray-600" />
						</button>
					</div>

					{/* Grid Content */}
					<div className="flex-1 overflow-y-auto p-4 md:p-8">
						<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
							{selectedEvent.images.map((img, idx) => (
								<button
									key={img}
									type="button"
									className="group aspect-square relative overflow-hidden rounded-lg bg-gray-100 cursor-zoom-in border-0 p-0"
									onClick={(e) => {
										e.stopPropagation();
										openImage(idx);
									}}
								>
									<img
										src={img}
										alt={`${selectedEvent.title} - ${idx + 1}`}
										className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
										loading="lazy"
									/>
									<div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
								</button>
							))}
						</div>
					</div>
				</div>
			)}

			{/* Fullscreen Lightbox */}
			{selectedEvent && focusedImageIndex !== null && (
				// biome-ignore lint/a11y/useKeyWithClickEvents: Handled globally via useEffect
				<div
					className="fixed inset-0 z-[60] flex items-center justify-center bg-black/98 animate-in fade-in duration-200"
					onClick={() => setFocusedImageIndex(null)}
					role="dialog"
					aria-modal="true"
				>
					<button
						type="button"
						className="absolute top-4 right-4 text-white/70 hover:text-white p-2 z-50 rounded-full hover:bg-white/10 cursor-pointer"
						onClick={(e) => {
							e.stopPropagation();
							setFocusedImageIndex(null);
						}}
					>
						<X size={32} />
					</button>

					<button
						type="button"
						className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-3 z-50 rounded-full hover:bg-white/10 hidden md:block cursor-pointer"
						onClick={(e) => navigateImage("prev", e)}
					>
						<ChevronLeft size={48} />
					</button>

					<button
						type="button"
						className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-3 z-50 rounded-full hover:bg-white/10 hidden md:block cursor-pointer"
						onClick={(e) => navigateImage("next", e)}
					>
						<ChevronRight size={48} />
					</button>

					  {/* biome-ignore lint/a11y/useKeyWithClickEvents: Image view within lightbox */}
					<img
						src={selectedEvent.images[focusedImageIndex]}
						alt={`${selectedEvent.title} - Full`}
						className="max-h-[90vh] max-w-[90vw] object-contain shadow-2xl"
						onClick={(e) => e.stopPropagation()}
					/>

					<div className="absolute bottom-4 left-0 w-full text-center text-white/50 text-sm">
						{focusedImageIndex + 1} / {selectedEvent.images.length}
					</div>
				</div>
			)}
		</div>
	);
}

function EventCard({
	event,
	onClick,
}: {
	event: { title: string; year: string; cover: string; images: string[] };
	onClick: () => void;
}) {
	const count = event.images.length;
	// Use different images for sides if available, otherwise reuse cover or second image
	const leftImg = count > 1 ? event.images[1] : null;
	const rightImg = count > 2 ? event.images[2] : (count > 1 ? event.images[1] : null);

	return (
		<button
			type="button"
			onClick={onClick}
			className="group relative w-full aspect-[4/3] cursor-pointer bg-transparent border-0 p-0 text-left perspective-1000"
		>
			<div className="relative w-full h-full flex items-center justify-center">
				{/* Right Wing */}
				{rightImg && (
					<div className="absolute inset-0 z-0 origin-bottom-right transition-all duration-500 ease-out opacity-0 translate-x-0 rotate-0 group-hover:opacity-100 group-hover:translate-x-8 group-hover:rotate-6">
						<img
							src={rightImg}
							alt=""
							className="w-full h-full object-cover rounded-2xl shadow-md brightness-75"
						/>
					</div>
				)}
				
				{/* Left Wing */}
				{leftImg && (
					<div className="absolute inset-0 z-0 origin-bottom-left transition-all duration-500 ease-out opacity-0 translate-x-0 rotate-0 group-hover:opacity-100 group-hover:-translate-x-8 group-hover:-rotate-6">
						<img
							src={leftImg}
							alt=""
							className="w-full h-full object-cover rounded-2xl shadow-md brightness-75"
						/>
					</div>
				)}

				{/* Main Card */}
				<div className="absolute inset-0 z-10 transition-transform duration-500 group-hover:-translate-y-2">
					<div className="relative w-full h-full overflow-hidden rounded-2xl shadow-lg border border-gray-100">
						<img
							src={event.cover}
							alt={event.title}
							className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
						/>
						{/* Overlay */}
						<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 transition-opacity duration-300" />
						
						{/* Content */}
						<div className="absolute bottom-0 left-0 w-full p-5 text-white">
							<div className="flex items-center justify-between mb-1">
								<span className="text-xs font-semibold uppercase tracking-wider bg-primary/90 px-2 py-1 rounded-md shadow-sm backdrop-blur-sm">
									{event.year}
								</span>
								{count > 1 && (
									<div className="flex items-center gap-1 text-xs opacity-80 bg-black/40 px-2 py-1 rounded-full">
										<ImageIcon size={12} />
										<span>{count}</span>
									</div>
								)}
							</div>
							<h3 className="text-xl font-bold font-heading leading-tight line-clamp-2">
								{event.title}
							</h3>
						</div>
						
						{/* Hover Icon */}
						<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-50 group-hover:scale-100">
							<div className="bg-white/20 backdrop-blur-md p-4 rounded-full border border-white/30 text-white shadow-xl">
								<ZoomIn size={32} />
							</div>
						</div>
					</div>
				</div>
			</div>
		</button>
	);
}
