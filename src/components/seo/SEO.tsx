import { Helmet } from "react-helmet-async";
import { SITE_URL, absUrl } from "@/lib/seo";

type SEOProps = {
  title: string;
  description: string;
  path: string; // route path, e.g. "/services" or "/areas/newcastle"
  image?: string;
  type?: "website" | "article";
  noindex?: boolean;
  schemas?: Array<Record<string, unknown>>;
  keywords?: string;
};

export const SEO = ({
  title,
  description,
  path,
  image,
  type = "website",
  noindex = false,
  schemas = [],
  keywords,
}: SEOProps) => {
  const url = absUrl(path);
  const ogImage = image ?? `${SITE_URL}/og-image.jpg`;
  const fullTitle = title.includes("Ntombii Tech")
    ? title
    : `${title} | Ntombii Tech`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={url} />
      {noindex && <meta name="robots" content="noindex,nofollow" />}

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Ntombii Tech" />
      <meta property="og:locale" content="en_ZA" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* JSON-LD */}
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(s)}
        </script>
      ))}
    </Helmet>
  );
};
