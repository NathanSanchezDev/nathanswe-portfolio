"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LazyMotion, domAnimation, m } from "framer-motion";
import { BsArrowReturnLeft } from "react-icons/bs";
import { initial, animate, exit, transition } from "utils";
import { MENU_OPTIONS, SITE_ROUTES, SITE_STRINGS } from "../constants";

export function Menu({ onClick = () => { } }) {
	const pathname = usePathname();

	const sortAscending = (a, b) => a.id - b.id;

	const handleOnClick = (e, isHashLink) => {
		e.preventDefault();

		if (isHashLink) {
			const hash = e.target.hash;
			const height = 100;
			const targetElement = document.querySelector(hash);
			if (targetElement) {
				const offsetTop = targetElement.offsetTop || 0;
				window.scrollTo({
					top: offsetTop - height,
					behavior: "smooth",
				});
			}
		} else {
			window.location.href = e.target.href;
		}

		window.setTimeout(() => onClick(), 350);
	};

	const mainMenu = (
		<m.nav
			initial={initial}
			animate={animate}
			exit={exit}
			transition={transition}
			role="menu"
		>
			<ul className="flex justify-center gap-5 flex-col md:flex-row items-start md:items-center">
				{MENU_OPTIONS.sort(sortAscending).map((menuItem) => (
					<li key={menuItem.id}>
						<a
							href={menuItem.url}
							title={menuItem.name}
							onClick={(e) => handleOnClick(e, menuItem.url.startsWith("#"))}
							className="relative text-xl hover:no-underline after:absolute after:left-0 after:-bottom-[3px] after:h-[2px] after:w-0 after:bg-current after:transition-width after:duration-300 after:ease-in-out hover:after:w-full"
						>
							{menuItem.name}
						</a>
					</li>
				))}
			</ul>
		</m.nav>
	);

	const backMenu = (
		<m.div initial={initial} animate={animate} exit={exit} transition={transition}>
			<Link
				href={SITE_ROUTES.home}
				title={SITE_STRINGS.backToMainPageTitle}
				className="icon-link-btn"
			>
				<span>
					<BsArrowReturnLeft />
				</span>
				{SITE_STRINGS.backToMainText}
			</Link>
		</m.div>
	);

	const content =
		pathname === SITE_ROUTES.projects ||
			pathname === SITE_ROUTES.resume ||
			pathname === SITE_ROUTES.blog
			? backMenu
			: mainMenu;

	if (MENU_OPTIONS.length === 0) {
		return null;
	}

	return <LazyMotion features={domAnimation}>{content}</LazyMotion>;
}