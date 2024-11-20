//app layout
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
import { headers } from "next/headers";
import CanonicalTag from '@/lib/seo_Canonical';
import { ChildSelector } from '@/components/ChildSelector';

import Mascot from '@/components/Mascot';



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

        <div className="min-h-screen bg-secondary/20">
            <header className="navbar bg-base-200 shadow-sm hidden md:flex">
                <div className="navbar-start">
                    <div className="flex items-center gap-2 px-4">
                        <div className="w-8 h-8 relative">
                            <Mascot />
                        </div>
                        <span className="text-xl font-bold">{config.appName}</span>
                    </div>
                </div>
                <div className="navbar-end gap-2">
                    <ThemeSwitch />
                    <UserMenu />
                </div>

            </header>
            <ChildSelector />

            <main className="container mx-auto px-4 mb-24">
                {children}
            </main>
            <MainNav />
        </div>

    );
}