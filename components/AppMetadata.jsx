const author = "Nathan Sanchez";
const description =
    "Software engineer with expertise in .NET, React, and cloud-native solutions, specializing in enterprise identity management and scalable web applications.";
const url = "https://nathanswe.com";

export const AppMetadata = {
    metadataBase: new URL(url),
    title: {
        default: `Portfolio | ${author}`,
        template: `%s | ${author}`,
    },
    description: description,
    icons: {
        icon: "/favicon.png",
    },
    keywords: [
        "Nathan Sanchez",
        "Nathan Sanchez - software engineer",
        "Full-stack developer",
        ".NET developer",
        "React developer",
        "Enterprise identity management",
        "Cloud-native applications",
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
            {
                url: `${url}/assets/nathan-sanchez-portfolio-banner.png`,
                width: 1200,
                height: 630,
                alt: `${author} Portfolio`,
            },
        ],
        locale: "en-US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: `${author} | Portfolio`,
        description: description,
        image: `${url}/assets/nathan-sanchez-portfolio-banner.png`,
        site: "@nathanxdev",
        creator: "@nathanxdev",
    },
};