
import "@/page.css";

import Footer from '@/components/ui/Footer';
import Header from '@/components/ui/Header';

import { MoreStories } from '@/components/blog/more-stories';

import { renderSchemaTags } from "@/lib/seo";


export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {renderSchemaTags()}
      <Header />
      <div className="min-h-screen">{children}</div>
      <div className="h-16" ></div>
      <Footer />
    </>
  );
}
