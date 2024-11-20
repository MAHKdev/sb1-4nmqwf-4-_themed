import BackgroundBlurry from '@/components/backgroundsBlurry';
import { UsersRound, Heart, Zap, CheckCircle } from 'lucide-react';
import AffiliateRegisterForm from '@/components/affiliates/AffiliateRegisterForm';

import { getSEOTags } from "@/lib/seo";
import { Suspense } from 'react';
export const metadata = getSEOTags({
    title: "B2B",
    description: "Partner with us to earn up to 15% commission.",
});

export default function Broker() {

    const benefits = [
        { text: 'Cookies set for 90 days', icon: CheckCircle },
        { text: 'Lifetime assignment of customers', icon: UsersRound },
        { text: '15% commission rate', icon: Heart }
    ];

    const contentExamples = [
        {
            category: 'PENSION',
            text: 'Constant doubt about your investments? We can help.'
        },
        {
            category: 'TRADER',
            text: 'Thousands of trading tools out there. Text promo to get the comparison.'
        },
        {
            category: 'TRADER',
            text: 'You checked trading tools, wasted money, time and nerves? We compared all of them.'
        }
    ];

    return (
        <div className="container mx-auto relative">
            <section className="py-8 min-h-[50vh] flex w-full flex-col justify-center items-center">
                {/* Hero Section */}
                <div className="hero min-h-[50vh] mb-8">
                    <div className="hero-content text-center">
                        <div className="max-w-md">
                            <h1 className="text-5xl font-bold">Become Affiliate</h1>
                            <div className="grid grid-cols-3 gap-2 justify-center items-center ">
                                {benefits.map((benefit, index) => (
                                    <div key={index} className="card gap-2">
                                        <div className="card-body flex flex-col justify-center items-center">
                                            <benefit.icon className="w-12 h-12 text-secondary" />
                                            {benefit.text}
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <p className="py-6">Join our network of successful affiliates and earn competitive commissions</p>

                        </div>
                    </div>
                </div>
            </section>

            <section className="py-8 gap-4 min-h-screen flex w-full flex-col justify-center items-center relative">

                {/* Onboarding Process */}
                <div className="card bg-base-100 shadow-xl mb-8">
                    <div className="card-body">
                        <h2 className="card-title justify-center">Simple Onboarding Process</h2>
                        <ul className="steps steps-vertical lg:steps-horizontal w-full">
                            <li className="step step-primary">Register</li>
                            <li className="step step-primary">Get Affiliate ID</li>
                            <li className="step">Start Earning</li>
                            <li className="step">Check Account</li>
                        </ul>
                    </div>
                </div>
                <BackgroundBlurry />

            </section>

            <section className="py-8 gap-4 min-h-screen flex w-full flex-col justify-center items-center relative">
                {/* Marketing Content Section */}
                <h2 className="card-title justify-center">Ready-to-Use Marketing Content</h2>
                <div className="flex justify-center">
                    <div className="mockup-phone border-primary">
                        <div className="camera"></div>
                        <div className="display">
                            <div className="artboard artboard-demo phone-1">
                                <div className="p-4 space-y-4">
                                    {contentExamples.map((content, index) => (
                                        <div key={index} className="alert shadow-lg">
                                            <div>
                                                <div className="badge badge-primary">{content.category}</div>
                                                <span>{content.text}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <BackgroundBlurry />

            </section>


            <section className="py-8 min-h-screen flex w-full flex-col justify-center items-center relative">
                {/* Get Started Section */}
                <Suspense fallback={null}>
                    <AffiliateRegisterForm />
                </Suspense>
                <BackgroundBlurry />

            </section>

        </div>
    );
}