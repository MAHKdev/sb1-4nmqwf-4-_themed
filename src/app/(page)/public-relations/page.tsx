import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

import { getSEOTags } from "@/lib/seo";
export const metadata = getSEOTags({
  title: "Public Relations",
  description: "Interested in Brand Partnerships? We're providing you with content and options to proceed.",
});

const PRLandingPage: NextPage = () => {
  return (
    <>

      {/* Hero Section */}
      <div className="hero min-h-[60vh] ">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Communications Hub</h1>
            <p className="py-6">Your gateway to our latest news, partnership opportunities, and media resources.</p>
            <button className="btn btn-primary">Latest News</button>
          </div>
        </div>
      </div>

      {/* Partnership Section */}
      <section id="partnerships" className=" p-8">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-6">Partnership Opportunities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h3 className="card-title">Strategic Partnerships</h3>
                <p>Explore collaboration opportunities with us...</p>
                <button className="btn btn-primary">Download Partnership Deck</button>
              </div>
            </div>
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h3 className="card-title">Submit Proposal</h3>
                <p>Have a partnership idea? We&apos;d love to hear it!</p>
                <button className="btn btn-secondary">Submit Proposal</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Resources */}
      <section id="brand" className="p-8">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-6">Brand Resources</h2>
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h3 className="card-title">Brand Assets</h3>
              <p>Access our logo, brand guidelines, and media kit.</p>
              <div className="flex flex-wrap gap-4 mt-4">
                <Link href="#" className="btn btn-outline">Logo Package</Link>
                <Link href="#" className="btn btn-outline">Brand Guidelines</Link>
                <Link href="#" className="btn btn-outline">Media Kit</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className=" p-8">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h3 className="card-title">Media Inquiries</h3>
                <p>For press and media inquiries, please contact:</p>
                <div className="mt-4">
                  <p>Email: press@company.com</p>
                  <div className="flex flex-wrap gap-4 mt-4">
                    <Link href="https://twitter.com/company" className="btn btn-primary">
                      Twitter
                    </Link>
                    <Link href="https://t.me/company" className="btn btn-primary">
                      Telegram
                    </Link>
                    <Link href="https://line.me/company" className="btn btn-primary">
                      Line
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default PRLandingPage