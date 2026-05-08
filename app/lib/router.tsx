import {
	createContext,
	type ReactNode,
	useContext,
	useEffect,
	useState,
} from "react";

interface RouterContextType {
	path: string;
	navigate: (to: string) => void;
}

const RouterContext = createContext<RouterContextType | undefined>(undefined);

export function useRouter() {
	const context = useContext(RouterContext);
	if (!context) {
		throw new Error("useRouter must be used within a Router");
	}
	return context;
}

export function Router({ children }: { children: ReactNode }) {
	const [path, setPath] = useState(window.location.pathname);

	useEffect(() => {
		const onPopState = () => {
			setPath(window.location.pathname);
		};
		window.addEventListener("popstate", onPopState);
		return () => window.removeEventListener("popstate", onPopState);
	}, []);

	const navigate = (to: string) => {
		if (to !== window.location.pathname) {
			window.history.pushState({}, "", to);
			setPath(to);
			window.scrollTo(0, 0);
		}
	};

	return (
		<RouterContext.Provider value={{ path, navigate }}>
			{children}
		</RouterContext.Provider>
	);
}

export function Route({
	path,
	component: Component,
}: {
	path: string | string[];
	component: React.ComponentType;
}) {
	const { path: currentPath } = useRouter();

	const paths = Array.isArray(path) ? path : [path];

	if (!paths.includes(currentPath)) return null;
	return <Component />;
}

export function Link({
	to,
	children,
	className,
	...props
}: {
	to: string;
	children: ReactNode;
	className?: string;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>) {
	const { navigate } = useRouter();

	const handleClick = (e: React.MouseEvent) => {
		if (to.startsWith("http")) return;

		e.preventDefault();
		navigate(to);
	};

	return (
		<a href={to} onClick={handleClick} className={className} {...props}>
			{children}
		</a>
	);
}
