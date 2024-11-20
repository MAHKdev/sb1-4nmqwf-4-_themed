import "@/page.css";
import ReadingProgress from "@/components/ui/ReadingProgress";
import BackToTop from "@/components/ui/BackToTop";

import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";


export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <Header />
            <ReadingProgress />
            <BackToTop />

            <main className="pt-16">
                <div className="rounded-3xl bg-base-200 shadow-xs p-6 md:p-10 m-4 md:m-8 md:max-w-3xl">
                    {children}
                </div>
            </main>
            <Footer />

        </>
    );
}
