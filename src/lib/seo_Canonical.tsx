'use client';
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function CanonicalTag() {
    const pathname = usePathname(); // Get the current pathname
    const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://kido.do';

    useEffect(() => {
        if (!pathname) {
            console.warn("CanonicalTag: Pathname is undefined. Skipping URL update.");
            return;
        }

        // Construct the full URL
        const canonicalUrl = `${BASE_URL}${pathname}`;
        console.log("CanonicalTag: Updating URLs to:", canonicalUrl);

        // Update or create the canonical link element
        let linkElement = document.querySelector("link[rel='canonical']");
        if (!linkElement) {
            console.log("CanonicalTag: No canonical link found. Creating a new one.");
            linkElement = document.createElement("link");
            linkElement.setAttribute("rel", "canonical");
            document.head.appendChild(linkElement);
        } else {
            console.log("CanonicalTag: Found existing canonical link. Updating it.");
        }
        linkElement.setAttribute("href", canonicalUrl);

        // Update or create the Open Graph `og:url` meta tag
        let ogUrlElement = document.querySelector("meta[property='og:url']");
        if (!ogUrlElement) {
            console.log("CanonicalTag: No og:url meta tag found. Creating a new one.");
            ogUrlElement = document.createElement("meta");
            ogUrlElement.setAttribute("property", "og:url");
            document.head.appendChild(ogUrlElement);
        } else {
            console.log("CanonicalTag: Found existing og:url meta tag. Updating it.");
        }
        ogUrlElement.setAttribute("content", canonicalUrl);

    }, [pathname]); // Run whenever pathname changes

    return null; // This component does not render any visual output
}
