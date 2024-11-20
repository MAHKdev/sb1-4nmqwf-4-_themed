// app/dashboard/page.tsx
//render on client side:
import React from 'react';
import Image from "next/image";
import TypeWriter from '@/components/TypeWriter';
import Link from 'next/link';

import BackgroundBlurry from '@/components/backgroundsBlurry';
import MascotArrangement from '@/components/landingpage/HeroImage';

import { motion } from "framer-motion";

import RotatingCube from '@/components/ui/3DCube2D';


import { getSEOTags } from "@/lib/seo";

export const metadata = getSEOTags({
  title: "Motivation for a Lifetime",
  canonicalUrlRelative: "/",
  keywords: ["Lazy Kids", "How tall will I be", "How tall with I be", "Motivate Kids", "Successful Parenting", "Best Way to Raise Kids", "Motivational Game"],
});

const benefits = [
  { image: "/icons/3dicons_500px/rocker/iso/color.png", text: "Track Performance in School" },
  { image: "/icons/3dicons_500px/trophy/iso/color.png", text: "Payout Credits" },
  { image: "/icons/3dicons_500px/search/iso/color.png", text: "Record Height & Weight" },
  { image: "/icons/3dicons_500px/medal/iso/color.png", text: "Create Custom Chores for anything" },
]

// Server component that fetches webhook data from the server-side API


const Dashboard = () => {
  // Fetch the stored webhook data from the server-side API route


  //HERO: add target audience: Retail Traders, Private Investors, 401k Owners
  //HERO: we're developing: 401 Signals in last 30 days, 3063 trades done
  //Trusted by 33.429 traders -- No credit card required -- 
  return (
    <>
      <section className="hero relative  overflow-hidden relative" style={{ minHeight: '100vh' }} >
        <div className="w-full h-full bg-base-200 z-0 ">

        </div>

        <div className="hero-content  relative h-full md:h-auto pt-28 md:pt-0">
          <div className="max-w-md flex flex-col md:flex-row items-center z-50 h-full">
            <div className="flex flex-col h-full justify-between">
              <div className="my-8 flex flex-col h-full justify-between w-full">
                <div>
                  <h1 className="text-3xl font-bold flex flex-col text-primary text-left  mb-8">Empowering Parents.
                    <div className="flex flex-row whitespace-nowrap">
                      <span className="flex flex-row  mr-3">Kidodo </span>{" "}
                      <TypeWriter />
                    </div>
                  </h1>
                  <p className="pb-6 text-left  w-60 md:w-full">Set Chores and offer daily rewards to your kids. Enable a rewards catalogue. Track height and weight over time.</p>
                </div>

                <div className='flex flex-col'>

                  <p className='text-3xl mb-4 text-accent mb-0'>-</p>

                  {/* Replace By Call to Action button */}
                  <div className="flex justify-start flex-col">
                    <div className="flex justify-start flex-row gap-4 relative z-[9999992]">

                      <Link href='/home' className="btn" target='_blank'>


                        start free now
                      </Link>


                    </div>
                  </div>


                </div>
              </div>

            </div>



          </div>
          <div className="md:flex flex-col justify-center items-center absolute md:relative w-full -mr-60 md:mr-0 top-50 right-0 z-10">
            <MascotArrangement />
          </div>
          <BackgroundBlurry />

        </div>

      </section>

      <main className="container mx-auto px-8 flex min-h-screen flex-col items-center justify-between relative w-full overflow-x-clip md:overflow-x-visible">
        {/* <!-- Hero Section --> */}






        <RotatingCube />



        {/* <!-- Security Section -->  */}
        <section className="py-12 flex flex-col items-center justify-center" style={{ minHeight: '80vh' }}>
          <h2 className="text-3xl font-bold text-center mb-8 text-primary">
            <span className="text-secondary">Inspire</span>, <span className="text-secondary">Grow</span>, and <span className="text-secondary">Succeed</span> Together.
          </h2>
          <p className="mb-8 text-sm text-center max-w-prose">
            Empowering kids to achieve their goals with a fun and engaging system that
            motivates daily success, tracks progress, and strengthens family bonds.
          </p>

          <div className="relative flex justify-center items-center mt-8">
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="card shadow-xl animhover">
              <div className="card-body">
                <h3 className="card-title">Motivates Kids</h3>
                <p>
                  Daily challenges and rewards to encourage kids to stay focused and reach their potential.
                </p>
              </div>
            </div>

            <div className="card shadow-xl animhover">
              <div className="card-body">
                <h3 className="card-title">Tracks Growth</h3>
                <p>
                  Monitor physical, educational, and emotional progress to celebrate milestones together.
                </p>
              </div>
            </div>

            <div className="card shadow-xl animhover">
              <div className="card-body">
                <h3 className="card-title">Gamifies Success</h3>
                <p>
                  Fun incentives and gamification make achieving goals exciting and rewarding for kids.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div className="card shadow-xl animhover">
              <div className="card-body">
                <h3 className="card-title">Involves Family</h3>
                <p>
                  Strengthen family connections by creating shared goals and celebrating victories together.
                </p>
              </div>
            </div>

            <div className="card shadow-xl animhover">
              <div className="card-body">
                <h3 className="card-title">Reminds Parents</h3>
                <p>
                  Stay updated on progress and never miss an opportunity to support your child’s journey.
                </p>
              </div>
            </div>
          </div>
        </section>


        <section className="py-12 flex flex-col items-center justify-center gap-4 relative" style={{ minHeight: '80vh' }}>


          <div className="flex flex-row items-center justify-center gap-4 relative">
            <div className='relative'>
              <Image
                src="/icons/3dicons_500px/copy/iso/color.png"
                alt="icon"
                className="relative"
                width={200}
                height={200}
                priority
              />
            </div>

            <div>
              <h4 className="text-3xl font-bold text-center md:text-left mb-2 text-primary">
                Sign <span className="text-secondary">Contracts</span> with your Kids.
              </h4>
              <p className="mb-8 text-sm text-center md:text-left max-w-prose">
                Empowering kids to achieve their goals with a fun and engaging system that
                motivates daily success, tracks progress, and strengthens family bonds.
              </p>
            </div>
          </div>



          <div className="flex flex-row items-center justify-center gap-4 relative">
            <div className='relative'>
              <Image
                src="/icons/3dicons_500px/rocket/iso/color.png"
                alt="icon"
                className="relative"
                width={200}
                height={200}
                priority
              />
            </div>

            <div>
              <h4 className="text-3xl font-bold text-center md:text-left mb-2 text-primary">
                Track <span className="text-secondary">Performance</span> in School.
              </h4>
              <p className="mb-8 text-sm text-center md:text-left max-w-prose">
                Empowering kids to achieve their goals with a fun and engaging system that
                motivates daily success, tracks progress, and strengthens family bonds.
              </p>
            </div>
          </div>



          <div className="flex flex-row items-center justify-center gap-4 relative">
            <div className='relative'>
              <Image
                src="/icons/3dicons_500px/trophy/iso/color.png"
                alt="icon"
                className="relative"
                width={200}
                height={200}
                priority
              />
            </div>

            <div>
              <h4 className="text-3xl font-bold text-center md:text-left mb-2 text-primary">
                <span className="text-secondary">Payout</span> Credits or trade-in <span className="text-secondary">Rewards</span>.
              </h4>
              <p className="mb-8 text-sm text-center md:text-left max-w-prose">
                Empowering kids to achieve their goals with a fun and engaging system that
                motivates daily success, tracks progress, and strengthens family bonds.
              </p>
            </div>
          </div>

          <div className="flex flex-row items-center justify-center gap-4 relative">
            <div className='relative'>
              <Image
                src="/icons/3dicons_500px/zoom/iso/color.png"
                alt="icon"
                className="relative"
                width={200}
                height={200}
                priority
              />
            </div>

            <div>
              <h4 className="text-3xl font-bold text-center md:text-left mb-2 text-primary">
                <span className="text-secondary">Payout</span> Credits or trade-in <span className="text-secondary">Rewards</span>.
              </h4>
              <p className="mb-8 text-sm text-center md:text-left max-w-prose">
                Empowering kids to achieve their goals with a fun and engaging system that
                motivates daily success, tracks progress, and strengthens family bonds.
              </p>
            </div>
          </div>




          <div className="flex flex-row items-center justify-center gap-4 relative">
            <div className='relative'>
              <Image
                src="/icons/3dicons_500px/medal/iso/color.png"
                alt="icon"
                className="relative"
                width={200}
                height={200}
                priority
              />
            </div>

            <div>
              <h4 className="text-3xl font-bold text-center md:text-left mb-2 text-primary">
                Create <span className="text-secondary">Custom Tasks</span>.
              </h4>
              <p className="mb-8 text-sm text-center md:text-left max-w-prose">
                Empowering kids to achieve their goals with a fun and engaging system that
                motivates daily success, tracks progress, and strengthens family bonds.
              </p>
            </div>
          </div>



          <BackgroundBlurry />

        </section>





        <section className="py-12 flex flex-row items-center justify-center gap-4 relative" style={{ minHeight: '80vh' }}>

          <div>
            <h2 className="text-3xl font-bold text-center md:text-left mb-8 text-primary">
              <span className="text-secondary">Gamification</span>: <span className="text-secondary">Multipliers</span> and <span className="text-secondary">Streaks</span> keep the kids committed.
            </h2>
            <p className="mb-8 text-sm text-center md:text-left max-w-prose">
              Empowering kids to achieve their goals with a fun and engaging system that
              motivates daily success, tracks progress, and strengthens family bonds.
            </p>
          </div>
          <div className='relative'>

            <Image
              src="/icons/3dicons_500px/minecraft/iso/color.png"
              alt="icon"
              className="relative"
              width={300}
              height={300}
              priority
            />
            <BackgroundBlurry />

          </div>
        </section>


        {/* <!-- CTA Section --> */}
        <section className="py-12 flex flex-col items-center justify-center flex-row" style={{ minHeight: '60vh' }}>
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4 text-primary">Ready to level up your Parenting?</h2>
            <p className="mb-8">Join us and experience the power of algorithmic trading and diversified investments.</p>
            <Link className="btn btn-secondary" href='/home' >Get Started Now</Link>
          </div>
        </section>


        {/*  <!-- Technical Indicators Section --> 
                <section className="py-12 flex flex-col items-center justify-center flex-row my-20" style={{ minHeight: '60vh' }}>
                    <h2 className="text-3xl font-bold text-center mb-8 text-primary">Technical Indicators</h2>
                    <div className="text-center max-w-2xl mx-auto">
                        <p className="mb-4">We utilize over 110 technical indicators per trading pair, combining and interpreting them for optimal results.</p>
                        <p className="mb-4">Our multi-timeframe analysis covers:</p>
                        <ul className="list-disc list-inside mb-4">
                            <li>Bull vs bear market (macro)</li>
                            <li>Swing trading</li>
                            <li>High frequency trading</li>
                            <li>Dominant timeframe</li>
                        </ul>
                        <div className="alert alert-info">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            <span>Bollinger Bands are one of our key probability tools.</span>
                        </div>
                    </div>
                </section>
*/}
        {/*  <!-- Testimonials --> */}


        {/*  <!-- FAQ --> */}


        {/* <!-- Liquidity Section --> 
                <section className="py-12 flex flex-col items-center justify-center flex-row" style={{ minHeight: '60vh' }}>
                    <h2 className="text-3xl font-bold text-center mb-8 text-primary">The Liquidity Advantage</h2>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                        <div className="max-w-md">
                            <p className="mb-4">Unlike large institutions facing liquidity challenges for massive orders, our algorithms can enter and exit the market far more often without order filling issues.</p>
                        </div>
                        <div className="max-w-md">
                            <Image
                                src="/vanguard.svg"
                                alt="Vanguard"
                                className=""
                                width={50}
                                height={50}
                                priority
                            />
                        </div>
                    </div>
                </section>
*/}


        {/* <!-- Diversification Section --> 
                <section className="py-12 flex flex-col items-center justify-center flex-row" style={{ minHeight: '60vh' }}>
                    <h2 className="text-3xl font-bold text-center mb-8 text-primary">Diversification</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="badge badge-lg shadow-xl p-4 bg-base-200 animhover">ForEx</div>
                        <div className="badge badge-lg shadow-xl p-4 bg-base-200 animhover">Stocks</div>
                        <div className="badge badge-lg shadow-xl p-4 bg-base-200 animhover  ">ETFs</div>
                        <div className="badge badge-lg shadow-xl p-4 bg-base-200 animhover  ">Funds</div>
                        <div className="badge badge-lg shadow-xl p-4 bg-base-200 animhover  ">Crypto</div>
                        <div className="badge badge-lg shadow-xl p-4 bg-base-200 animhover  ">Real Estate</div>
                        <div className="badge badge-lg shadow-xl p-4 bg-base-200 animhover  ">Cars</div>
                        <div className="badge badge-lg shadow-xl p-4 bg-base-200 animhover  ">Diamonds</div>
                    </div>
                </section>

*/}


      </main >
    </>

  );
};

export default Dashboard;
