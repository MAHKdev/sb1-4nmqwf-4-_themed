import { ThemeProvider } from '@/components/ThemeProvider';
import { ChildProvider } from '@/contexts/ChildContext';
import { AuthProvider } from '@/components/AuthProvider';
import { MainNav } from '@/components/MainNav';
import ClientLayout from '@/components/ui/Layoutclient';
import { SyncProvider } from '@/components/SyncProvider';
import '@/globals.css';
import '@/page.css';
import config from "@/config";
import { GoogleAnalytics } from '@next/third-parties/google';

import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";

import { getSEOTags } from "@/lib/seo";
import { renderSchemaTags } from "@/lib/seo";
import { headers } from "next/headers";
import CanonicalTag from '@/lib/seo_Canonical';

export const metadata = getSEOTags({
    title: "Motivation for  Lifetime",
    keywords: ["Motivation for a Lifetime", "lazy kids", "How tall will I be", "How tall with I be"],
    //description: "Find out more about who is behind the scenes, where we physically operate and our team history.",
});




export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (

        <div className="min-h-screen">
            <Header />
            <main className="   ">
                {children}
            </main>
            <Footer />
        </div>

    );
}