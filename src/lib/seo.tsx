import React from "react";
import config from "@/config";

export const getSEOTags = ({
  robots,
  title,
  description,
  keywords,
  openGraph,
  canonicalUrlRelative,
  extraTags,
}: {
  robots?: string;
  title?: string;
  description?: string;
  keywords?: string[];
  openGraph?: {
    title?: string;
    description?: string;
    url?: string;
  };
  canonicalUrlRelative?: string;
  extraTags?: Record<string, any>;
} = {}) => {

  const metaTitle = `${title} | ${config.appName}` || config.appName;
  const metaDescription = description || config.appDescription;

  return {

    // up to 50 characters (what does your app do for the user?) > your main should be here
    robots: "index, follow",
    title: metaTitle || config.appName,
    // up to 160 characters (how does your app help the user?)
    description: metaDescription || config.appDescription,
    // some keywords separated by commas. by default it will be your app name
    keywords: keywords || [config.appName],
    applicationName: config.appName,
    // set a base URL prefix for other fields that require a fully qualified URL (.e.g og:image: og:image: 'https://yourdomain.com/share.png' => '/share.png')
    metadataBase: new URL(
      process.env.NODE_ENV === "development"
        ? "http://localhost:3000/"
        : `https://${config.domainName}/`
    ),

    openGraph: {
      title: openGraph?.title || metaTitle,
      description: openGraph?.description || metaDescription,
      url: openGraph?.url || `https://${config.domainName}/`,
      siteName: openGraph?.title || config.appName,
      // If you add an opengraph-image.(jpg|jpeg|png|gif) image to the /app folder, you don't need the code below
      // images: [
      //   {
      //     url: `https://${config.domainName}/share.png`,
      //     width: 1200,
      //     height: 660,
      //   },
      // ],
      locale: "en_US",
      type: "website",
    },

    twitter: {
      title: openGraph?.title || metaTitle,
      description: openGraph?.description || metaDescription,
      // If you add an twitter-image.(jpg|jpeg|png|gif) image to the /app folder, you don't need the code below
      // images: [openGraph?.image || defaults.og.image],
      card: "summary_large_image",
      creator: "@capitalmtech",
    },

    // If a canonical URL is given, we add it. The metadataBase will turn the relative URL into a fully qualified URL
    ...(canonicalUrlRelative && {
      alternates: { canonical: canonicalUrlRelative },
    }),

    // If you want to add extra tags, you can pass them here
    ...extraTags,
  };
};

// Strctured Data for Rich Results on Google. Learn more: https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data
// Find your type here (SoftwareApp, Book...): https://developers.google.com/search/docs/appearance/structured-data/search-gallery
// Use this tool to check data is well structure: https://search.google.com/test/rich-results
// You don't have to use this component, but it increase your chances of having a rich snippet on Google.
// I recommend this one below to your /page.js for software apps: It tells Google your AppName is a Software, and it has a rating of 4.8/5 from 12 reviews.
// Fill the fields with your own data
// See https://shipfa.st/docs/features/seo
export const renderSchemaTags = (canonicalUrlRelative = "/") => {
  const schemaData = {
    "@context": "http://schema.org",
    "@type": "SoftwareApplication",
    name: config.appName,
    description: config.appDescription,
    image: `https://${config.domainName}/favicon/favicon.png`,
    url: `https://${config.domainName}${canonicalUrlRelative}`,
    author: {
      "@type": "Business",
      name: config.appName,
    },
    datePublished: "2024-10-01",
    applicationCategory: "EducationalApplication",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      ratingCount: "12",
    },
    offers: [
      {
        "@type": "Offer",
        price: "9.99",
        priceCurrency: "USD",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schemaData),
      }}
    />
  );
};


/*
Why Use dangerouslySetInnerHTML?
1 - Schema Markup Requirement:
Google and other search engines require schema markup to be present in the HTML of the page at load time. This needs to be inside a <script> tag with type="application/ld+json". Simply embedding this as JSX content won't work because React typically escapes content for safety reasons, making the JSON invalid for schema markup.
2 - No Direct Alternatives in JSX:
React does not allow direct HTML injection or unescaped rendering by default. For cases like schema markup, where you need to inject valid JSON within a <script> tag, dangerouslySetInnerHTML remains the most feasible option.
*/
//https://stackoverflow.com/questions/75362636/how-can-i-get-the-url-pathname-on-a-server-component-next-js-13   on canonical dynamic generation