const author = "Nathan Sanchez";
const description =
	"Software developer from United States, Florida, who loves to build high-functioning websites, single page applications, customer relationship management or code from scratch using React and Next.js";
const url = "http://nathanswe.com";
export const AppMetadata = {
	metadataBase: new URL("http://nathanswe.com"),
	title: {
		default: `Portfolio | ${author}`,
		template: `%s | ${author}`
	},
	description: description,
	icons: {
		icon: "/favicon.png"
	},
	keywords: [
		"Nathan Sanchez",
		"Nathan Sanchez - software developer",
		"Frontend developer",
		"Backend developer",
		"Portfolio website",
		"Frontend Developer Portfolio"
	],
	creator: author,
	authors: [{ name: author, url: url }],
	colorScheme: "dark",
	openGraph: {
		title: `${author} | Portfolio`,
		description: description,
		url: url,
		siteName: `${author} | Portfolio`,
		images: [
		],
		locale: "en-US",
		type: "website"
	}
};
