import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "../lib/utils";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
	children: ReactNode;
	className?: string;
}

export function Card({ children, className, ...props }: CardProps) {
	return (
		<div
			className={cn(
				"bg-white rounded-2xl shadow-sm border border-gray-ui/50 overflow-hidden",
				className,
			)}
			{...props}
		>
			{children}
		</div>
	);
}
