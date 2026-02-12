import type { ButtonHTMLAttributes, ReactNode } from "react";
import { Link } from "react-router";
import { cn } from "../lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: "primary" | "secondary" | "accent" | "ghost";
	size?: "sm" | "md" | "lg";
	to?: string;
	className?: string;
	children: ReactNode;
}

export function Button({
	variant = "primary",
	size = "md",
	to,
	className,
	children,
	...props
}: ButtonProps) {
	const baseStyles =
		"inline-flex items-center justify-center font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none rounded-full";

	const variants = {
		primary: "bg-primary text-white hover:bg-primary/90 focus:ring-primary",
		secondary:
			"border-2 border-primary text-primary hover:bg-primary/10 focus:ring-primary",
		accent: "bg-accent text-text-base hover:bg-accent/90 focus:ring-accent",
		ghost: "text-text-base hover:bg-gray-ui/50 focus:ring-gray-ui",
	};

	const sizes = {
		sm: "h-9 px-4 text-sm",
		md: "h-11 px-6 text-base",
		lg: "h-14 px-8 text-lg",
	};

	const styles = cn(baseStyles, variants[variant], sizes[size], className);

	if (to) {
		if (to.startsWith("http")) {
			return (
				<a
					href={to}
					className={styles}
					target="_blank"
					rel="noopener noreferrer"
					{...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
				>
					{children}
				</a>
			);
		}
		return (
			// biome-ignore lint/suspicious/noExplicitAny: polymorphic component prop spreading
			<Link to={to} className={styles} {...(props as any)}>
				{children}
			</Link>
		);
	}

	return (
		<button className={styles} {...props}>
			{children}
		</button>
	);
}
