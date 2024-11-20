import { ThemeProvider } from '@/components/ThemeProvider';
import { ChildProvider } from '@/contexts/ChildContext';
import { AuthProvider } from '@/components/AuthProvider';
import { MainNav } from '@/components/MainNav';
import { UserMenu } from '@/components/UserMenu';
import { ThemeSwitch } from '@/components/ThemeSwitch';
import ClientLayout from '@/components/ui/Layoutclient';
import { SyncProvider } from '@/components/SyncProvider';

import '@/globals.css';
import config from "@/config";
import { GoogleAnalytics } from '@next/third-parties/google';


import { getSEOTags } from "@/lib/seo";
import { renderSchemaTags } from "@/lib/seo";
import CanonicalTag from '@/lib/seo_Canonical';

export const metadata = getSEOTags({
  title: "Motivation for a Lifetime",
  keywords: ["Motivation for a Lifetime", "lazy kids", "How tall will I be", "How tall with I be"],
  //description: "Find out more about who is behind the scenes, where we physically operate and our team history.",
});


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      {config.domainName && <head>
        {renderSchemaTags()}
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA4_ID || ""} />
        <CanonicalTag />
      </head>}
      <body>
        <AuthProvider>
          <ThemeProvider>
            <ChildProvider>
              <SyncProvider>
                <ClientLayout>

                  {children}

                </ClientLayout>
              </SyncProvider>
            </ChildProvider>
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}