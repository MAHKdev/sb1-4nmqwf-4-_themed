// app/auth/layout.tsx

import React, { ReactNode } from 'react';
import config from '@/config';
import { getSEOTags } from '@/lib/seo';

// Define the expected type for the getSEOTags function argument
interface SEOTags {
  title: string;
  description: string;
  keywords: string[];
  openGraph: {
    title: string;
    description: string;
    url: string;
    type: string;
    images: Array<{ url: string; alt: string }>;
  };
  canonicalUrlRelative: string;
  extraTags: string[]; // Make this required to match the expected type
}

// Define the metadata using the getSEOTags function with all required fields
export const metadata = getSEOTags({
  title: `Sign-in`,
  description: `Sign in to ${config.appName} to access your account and explore our features.`,
  keywords: ['signin', config.appName, 'login', 'authentication'],
  openGraph: {
    title: `Sign-in to ${config.appName}`,
    description: `Join ${config.appName} to manage your account and explore new features.`,
    url: `/signin`,
    type: 'website',
    images: [{ url: `/signin-og.png`, alt: 'Sign-in to app' }],
  },
  //canonicalUrlRelative: '/auth/signin',
  extraTags: ['viewport', 'width=device-width, initial-scale=1'], // Example extra tag
} as SEOTags); // Cast to SEOTags to ensure it matches the expected type

// Define the component props type
interface LayoutProps {
  children: ReactNode;
}

// Define the Layout component with the correct props type
export default function Layout({ children }: LayoutProps) {
  return <>{children}</>;
}
