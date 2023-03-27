import { useSiteMetadata } from "../hooks/siteMetadata";

export const SEO = ({ title, description, pathname, children }) => {

    const { title: defaultTitle, description: defaultDescription, siteUrl } = useSiteMetadata();

    const seo = {
        title: title || defaultTitle,
        description: description || defaultDescription,
        url: `${siteUrl}${pathname || ``}`,
    };

    return (
        <>
            <title>{seo.title}</title>
            <meta name="description" content={seo.description} />
            <meta name="twitter:description" content={seo.description} />
            <meta name="og:description" content={seo.description} />
            <meta name="twitter:title" content={seo.title} />
            <meta name="og:title" content={seo.title} />
            <meta name="twitter:url" content={seo.url} />
            <meta name="og:url" content={seo.url} />
            {children}
        </>
    );
}
